import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, $$ } from '@wdio/globals';
import { LoginElements } from "../pageobjects/login.elements";
import { HomeElements } from "../pageobjects/home.elements";
import { ProcessingRequestDetailsElement } from '../pageobjects/ProcessingRequestDetails.element';

Given(/^User open the browser and load the url (.+)$/, async (homepageUrl: string) => {
    await browser.url(homepageUrl);
    await browser.maximizeWindow();
});

When(/^User enter email (.+)$/, async (email: string) => {
    await $(LoginElements.emailInputSelector).setValue(email);
});

When(/^User click on the next button$/, async () => {
    await $(LoginElements.nextButtonSelector).click();
});

When(/^User enter password (.+)$/, async (password: string) => {
    await $(LoginElements.passwordInputSelector).setValue(password);
});

When(/^User click on the submit button$/, async () => {
    await $(LoginElements.signInButtonSelector).click();
});

Then(/^User should be logged and see header (.+)$/, async (headerText: string) => {
    expect(await $(HomeElements.header).getText()).toBe(headerText);
});

Then(/^User able to see proc reqest title$/, async () => {
    expect(await $(HomeElements.title).getText()).toBe('Processing Requests');
});

When(/^User enter the proc request id (.+)$/, async (procRequestId: string) => {
    await $(HomeElements.procRequestId).setValue(procRequestId);
    await $(HomeElements.dateCreated).click();
});

When(/^User click the search button$/, async () => {
    await browser.pause(1000);
    await $(HomeElements.searchButton).click();
});

Then(/^User should see only one row with proc request id$/, async () => {
    await browser.pause(1000);
    expect(await $$(HomeElements.rows)).toHaveLength(1);
});

When(/^User clicks on the first request link$/, async () => {
    await $('//tr[1]/td[1]/a').click();
});

Then(/^User should be directed to the process request details page$/, async () => {
    expect(await $(ProcessingRequestDetailsElement.title).getText()).toBe('Processing Request Details');
});

Then(/^the auto-refresh button should be enabled as default$/, async () => {
    const isAutoRefreshEnabled: boolean = await $(ProcessingRequestDetailsElement.autoRefreshToggle).isSelected();
    expect(isAutoRefreshEnabled).toBe(true);
    await browser.closeWindow();
});

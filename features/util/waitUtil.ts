async function waitElementByXPath(xpath: string, timeout: number = 5000): Promise<void> {
    await browser.waitUntil(async () => {
        const element = await $(xpath);
        return await element.isExisting();
    }, {
        timeout: timeout,
        timeoutMsg: `Timed out waiting for element with XPath: ${xpath}`
    });
}

export { waitElementByXPath };
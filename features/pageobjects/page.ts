import { browser } from '@wdio/globals';

export default class Page {
    public open() {
        return browser.url(`https://integration.ai.bioclinica.com`);
    }
}

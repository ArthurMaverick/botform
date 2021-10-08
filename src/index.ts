 //! WESLEY BOT
import puppeteer from 'puppeteer';
let limitCounter: number = 1

if (limitCounter < 9_000){
  setInterval(
    async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSdK_JYYOMZulfSPqNxqJP4Zrkjb7XxTn3Cd1mPfw16qQ1kUJQ/viewform?fbzx=1421041915633150429', {
      waitUntil: 'networkidle2',
    });
    page.once('load', async() => {
      console.log('Page loaded!')
      await page.type('input[jsname="YPqjbf"]', 'test@example.com');
      await page.click('#i9')
      await page.click('#i43')
      await page.click('div[jsname="M2UYVd"]')
    });

    await page.type('input[jsname="YPqjbf"]', 'test@example.com');
    await page.click('#i9')
    await page.click('#i43')
    await page.click('div[jsname="M2UYVd"]')
    
    await browser.close()
    console.log('enviado', ++limitCounter, 'vezes' )
  }, 6_000);
} else {
  console.log('Acabou!')
}


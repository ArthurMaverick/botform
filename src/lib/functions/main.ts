import puppeteer from 'puppeteer';
import {CreateBotProps} from '../contracts'
import {addClick, addType} from '../functions/subfunctions'

export const createBotProps = ({url,timers,clickElement,typeElement}: CreateBotProps) => {
  let limitCounter: number = 1
  
  if (limitCounter < timers.loops){
    setInterval(
      async () => {
      const browser = await puppeteer.launch({headless: true});
      const page = await browser.newPage();
      await page.goto(url, {waitUntil: 'networkidle2'});
      
      page.once('load', async () => {
        await addClick(page, clickElement)
        await addType(page, typeElement)
      });

      await page.close()
      await browser.close()
      
    }, timers.timestoped);
  } else {
    console.log('Acabou!')
  }

  console.log('enviado', limitCounter++, 'vezes' )

}

import puppeteer from 'puppeteer';
import {CreateBotProps} from '../contracts'
import {addClick, addType} from '../functions/subfunctions'

export const createBot = ({url,timers,elementGroup}: CreateBotProps) => {
  let limitCounter: number = 1
  
  if (limitCounter < timers.loops){
    setInterval(
      async () => {
      const browser = await puppeteer.launch({headless: true});
      const page = await browser.newPage();
      await page.goto(url, {waitUntil: 'networkidle2'});
      
      page.once('load', async () => {

        for (const group of elementGroup) {
              if(group.options === 'click') {
                await addClick(page, group.clickOptions)
              }
              if (group.options === 'type'){
                await addType(page, group.typeOptions) 
              }
            
          }
      });

      await page.close()
      await browser.close()
      
    }, timers.timestoped);
  } else {
    console.log('Acabou!')
  }
  console.log('enviado', limitCounter++, 'vezes' )

}

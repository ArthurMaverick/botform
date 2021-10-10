import {ClickElementsProps,TypeElementsProps} from '../../contracts'
import {Page} from 'puppeteer'

export async function addClick(page: Page, ele: ClickElementsProps) {
  if(ele !== undefined) {
    await page.click(`${ele.clickElement}[${ele.ClickAtribute}]`)
  }
}

export async function addType(page: Page, ele: TypeElementsProps) {
  if(ele !== undefined) {
      await page.type(`${ele.typeElement}[${ele.typeAtribute}]`, ele.textValue)
      
    
  }
}      



import React, { Dispatch, SetStateAction } from 'react'

export type DinamicItemsProps = {
  elementGroup: any[]
  setElementValuesToogle: Dispatch<SetStateAction<boolean>>
  addHtmlElement: string
  addHtmlAttribute: string
  addHtmlAttributeValue: string
  addHtmlOptions: string
  elementValuesToogle: boolean
  removeElementGroup: () => void
  AddElementGroup: () => void

}
export const DefaultGroup = (props: DinamicItemsProps) => {
  return (
    <>
    {props.elementGroup.map((values: any)=> (
      <form key={Math.random()}>
        <select name="type">
          <option value="click" onClick={()=>props.setElementValuesToogle(false)}>click</option>
          <option value="type"  onClick={()=>props.setElementValuesToogle(true)}>write</option>
        </select>
        
        <div>
          <label htmlFor="htmlElement">Select html element</label>
          <input type="text" id="htmlElement" placeholder='button'value={props.addHtmlElement} />
        </div>

        <div>
          <label htmlFor="attribute">Enter the attribute and value</label>
          <input type="text" id="attribute" placeholder='class="value"'  value={props.addHtmlAttribute} />
        </div>

        {props.elementValuesToogle && 
          <div>
            <label htmlFor="inputValue">Input Value</label>
            <input type="text" id="inputValue" placeholder="what u want to write?" value={props.addHtmlAttributeValue} />
          </div>
        }
      
        <input type="button" value="Delete" onClick={()=>props.removeElementGroup()}/> 
       {/* <input type="button" value="Add" onClick={()=>props.AddElementGroup()}/> */}
      </form>
    ))}
    </>
  )
}

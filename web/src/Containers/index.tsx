import React from 'react'
import {DefaultGroup} from './default'
export const Header = () => {
  const [elementGroup, setElementGroup] = React.useState<object[]>([]) // main
  
  const [addHtmlOptions, setHtmlOptions] = React.useState('')
  const [addHtmlElement , setHtmlElement] = React.useState('') // inputs
  const [addHtmlAttribute, setAddHtmlAttribute] = React.useState('') // attribute
  const [addHtmlAttributeValue, setaddHtmlAttributeValue] = React.useState('') // attributeValue

  // const [addElement, setAddElement] = React.useState() // addElement
  const [elementValuesToogle, setElementValuesToogle] = React.useState(false) // 
    
  

  function AddElementGroup () {
  // setElementGroup((e)=>[...e,...newGroup])
  }

  function removeElementGroup () {
  }
  
  return (
    <div>
      <header></header>
      <main>
          <header>
              <h1>Bot Form</h1>
              <h2></h2>
          </header>
          <section>
              
                
                <DefaultGroup 
                  setElementValuesToogle={setElementValuesToogle}
                  addHtmlOptions={addHtmlOptions}
                  addHtmlElement={addHtmlElement}
                  addHtmlAttribute={addHtmlAttribute}
                  addHtmlAttributeValue={addHtmlAttributeValue}
                  AddElementGroup={AddElementGroup}
                  removeElementGroup={removeElementGroup} 
                  elementGroup={elementGroup} 
                  elementValuesToogle={elementValuesToogle}
                />
                <>
                    <select name="type">
                      <option value="click" onClick={()=>setElementValuesToogle(false)}>click</option>
                      <option value="type"  onClick={()=>setElementValuesToogle(true)}>write</option>
                    </select>
                    <div>
                      <label htmlFor="htmlElement">Select html element</label>
                      <input type="text" id="htmlElement" placeholder='button'value={addHtmlElement} onChange={(e)=>setHtmlElement(e.target.value)}/>
                    </div>

                    <div>
                      <label htmlFor="attribute">Enter the attribute and value</label>
                      <input type="text" id="attribute" placeholder='class="value"'  value={addHtmlAttribute} onChange={(e)=>setAddHtmlAttribute(e.target.value)}/>
                    </div>
  
                    {elementValuesToogle && 
                      <div>
                        <label htmlFor="inputValue">Input Value</label>
                        <input type="text" id="inputValue" placeholder="what u want to write?" value={addHtmlAttributeValue} onChange={(e)=>setaddHtmlAttributeValue(e.target.value)}/>
                      </div>
                    }
                  
                    <input type="button" value="Delete" onClick={()=>removeElementGroup()}/> 
                    <input type="button" value="Add" onClick={()=>AddElementGroup()}/>
                  </>
                
              
          </section>
          <div>
          <input type="button" value="GO Horse!"/>
          </div>
      </main>
    </div>
  )
}

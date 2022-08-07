import Router from "next/router";
import React from "react";
import { useRouter } from "next/router"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const autoComplete = () => {
  const router = useRouter();
    const items = [
        {
          id: 0,
          name: 'Abaji'
        },
        {
          id: 1,
          name: 'Apo Resettlement'
        },
        {
          id: 2,
          name: 'Dutse'
        },
        {
          id: 3,
          name: 'Gwarinpa'
        },
        {
          id: 4,
          name: 'Zuba'
        }
      ]

      const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
      }
    
      const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        router.push(`/stepone?location=${item.name}`)
        console.log(item)
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }
    
      const formatResult = (item) => {
        return (
          <>
            {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span> */}
            <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
          </>
        )
      }
    
      return (
        <div className="App">
          <header className="App-header">
            <div style={{ width: 400 }}>
              <ReactSearchAutocomplete
               styling={{
                fontFamily: "Avenir Next,Avenir,Segoe UI,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif",
              
                }}
                placeholder="Search by location"
                items={items}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
              />
            </div>
          </header>
        </div>
      )
}

export default autoComplete
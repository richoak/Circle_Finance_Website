import Router from "next/router";
import React from "react";
import { useRouter } from "next/router"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useDispatch } from "react-redux";
import { errandActions } from "../store/errandSlice";

const autoComplete = () => {
  const router = useRouter();
  const dispatch = useDispatch()    
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
        },
        {
          id: 5,
          name: 'Durumi'
        },
        {
          id: 6,
          name: 'Garki'
        },
        {
          id: 7,
          name: 'Nyanya'
        },
        {
          id: 8,
          name: 'Gudu'
        },
        {
          id: 9,
          name: 'Guzape'
        },
        {
          id: 10,
          name: 'Wumba'
        },
        {
          id: 11,
          name: 'Lokogoma'
        },
        {
          id: 12,
          name: 'Lugbe'
        },
        {
          id: 13,
          name: 'Gwarinpa'
        },
        {
          id: 14,
          name: 'Kado'
        },
        {
          id: 15,
          name: 'Orozo'
        },
        {
          id: 16,
          name: 'Mabushi'
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
        dispatch(errandActions.addLocation({
          'location':item.name,
      }))
        router.push(`/stepone?location=${item.name}`)
      
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
                placeholder="Search by location ( Abuja only )"
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
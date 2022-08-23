import React, { useState } from "react";
import INTERESTS from './interests'
import { TagsInput } from "react-tag-input-component";
import Fuse from 'fuse.js'
import './tags.css'


const options = {
  isCaseSensitive: false,
  includeScore: false,
  shouldSort: true,
  includeMatches: false,
  findAllMatches: false,
  minMatchCharLength: 1,
  location: 0,
  threshold: 0.6,
  distance: 100,
  useExtendedSearch: false,
  ignoreLocation: false,
  ignoreFieldNorm: false,
  fieldNormWeight: 1,
  keys: ['name']
}
export default function TagInput({selected,setSelected}) {
  
  const [suggestions,setSuggestions] = useState([]);
  

  const interests = INTERESTS;
  const fuse = new Fuse(interests,options);

  const beforeAddValidate = (tag) => {
    const tagLowerCase = tag.toLowerCase();
    if(interests.filter(interest=> interest.name===tagLowerCase).length!==0) return true;
    else 
      {
        const temp = fuse.search(tag);
       
        setSuggestions(temp);
        return false
      }
  }
 


  return (
    <div class="">
       <TagsInput
        value={selected}
        onChange={setSelected}
        name="interests"
        placeHolder="Enter Your Interests"
        isEditOnRemove
        beforeAddValidate={beforeAddValidate}
        
      />
     
      <div >{suggestions.length>0 &&
      (<>
      <p>Did you mean : </p>
    
      {suggestions.slice(0,7).map((item)=>(
        <>
        {/* <em>Sorry we couldnt find anything similar. Did you mean</em> */}
          <span className="suggestions">
          {item.item.name}, {" "}
          </span>
        </>
      ))} 
     
      </>)
      
      }</div>
      
    </div>
  );
}
import React, { useState } from "react";
import INTERESTS from '../interests'
import { TagsInput } from "react-tag-input-component";
import "./style.css";
import Fuse from 'fuse.js'


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
export default function TagInput() {
  const [selected, setSelected] = useState([]);
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
    <div>
      <h1>Add Interests</h1>

      <pre>{JSON.stringify(selected)}</pre>

      <TagsInput
        value={selected}
        onChange={setSelected}
        name="interests"
        placeHolder="Enter Your Interests"
        isEditOnRemove
        beforeAddValidate={beforeAddValidate}
        className="rounded-none input max-w-xs input-bordered focus:ring-indigo focus:border-indigo focus:z-10  placeholder-gray"
      />

      <em>press enter to add new tag</em>
     
      <div>{suggestions &&
      
      suggestions.map((item)=>(
        <>
        {/* <em>Sorry we couldnt find anything similar. Did you mean</em> */}
          <span>
          {item.item.name},{" "}
          </span>
        </>
      ))
      
      }</div>
      
    </div>
  );
}
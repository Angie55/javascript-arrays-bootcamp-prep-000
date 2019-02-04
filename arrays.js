var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(chocolateBars, Twix)
{
  chocolateBars= ["Twix",...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBar, Twix)
{
 chocolateBars.unshift("Twix");  
}

function addElementToEndOfArray(chocolateBars, Twix)
{
  [...chocolateBars, "Twix"];
}


function destructivelyAddElementToEndOfArray()
{
  
}
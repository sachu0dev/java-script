console.log(3 > 4);
      console.log(typeof true);
      console.log(5 == "5");//the == changes the type to same type.
      console.log(5 === "5"); // use === if we don't want the type to change.
      console.log( 5 != "5");
      console.log(5 !== "5"); // in this we do the same.
      console.log( 3 > 5-5); //  the comparision oparetor have lower periority than airthmatic.

      if(false){
        console.log("hello")
      } else{
        console.log("bye")
      }

      const age = 17;
      if(age >= 18)
        console.log("You can Drive");
       else if(age >= 17)
       console.log("Almost there!");
       else
        console.log("You can not Drive");
    
    let check;
    let names;
    
    fetch("http://www.communitybenefitinsight.org/api/get_hospitals.php?")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        // console.log(data);
        // return check=data
        data.find((e)=>{
            // if(e["hospital_id"]=="2150"){
            // console.log(e)
            // return check={
            //     names:e["name"],
            //     address:(e["city"]+" "+e["street_address"]),
            //     contact_number:e["medicare_provider_number"]
            // };
        // console.log(e);

        // }
        console.log(e)
        }) 
console.log(check)
      });

// console.log(check)


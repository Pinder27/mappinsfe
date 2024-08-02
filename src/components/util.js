import axios from 'axios';

 

const getPins = async(user)=> {
  try {
    const response = await axios.get(`http://localhost:5500/pin/${user}`);
    //const response = [8,9];
    //console.log(response.data);
    
    return (response.data);

    //console.log(response.data[0].lat);
  } catch (error) {
    console.error(error);
  }
}

const addPin = async(newPin)=>{
 
   try{
     await axios.post('http://localhost:5500/pin/',{
        username:newPin.username,
        title:newPin.title,
        desc: newPin.desc,
        rating:newPin.rating,
        lat:newPin.lat,
        lng:newPin.lng
     });
     //console.log('new pin added');
    }catch(e){
      console.error(e);
    }
    
}

const removePin = async(pin)=>{
  try{
      await axios.post('http://localhost:5500/pin/delete',{
          lng: pin.lng,
          lat: pin.lat
      });
     //console.log(pin);
  }catch(e){
    console.error(e);
  }
}

export {getPins,addPin,removePin};

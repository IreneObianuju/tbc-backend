const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch("http://universities.hipolabs.com", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));




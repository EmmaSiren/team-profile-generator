// function generateHTML() {
//     return `
//     <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
//   <link rel="stylesheet" href="./style.css" />

//   <title>Team Profile</title>
// </head>

// <body>
//   <header>My Team</header>
  
//   <div class="container">
//   <div class="row row-cols-1 row-cols-md-3">
//     <div class="col">
//       ${generateCard()}
//     </div>
//   </div>
//   </div>
// </body>

// </html>`;
// };


function generateCard(data) {
    if (data[0] === "Manager") {
    return `
    <div class="card h-100" style="width: 200px">
        <div class="card-body bg-primary">
          <h5 class="card-title">${data.getName()}</h5>
          <p class="card-text">Manager</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID</li>
          <li class="list-group-item">Email</li>
          <li class="list-group-item">Office Number</li>
        </ul>
      </div>`;
    };
};

module.exports = generateCard;
function generateHTML(data) {
  return `
    <!DOCTYPE html>
    <html lang="en">

      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="./style.css" />
        <title>Team Profile</title>
      </head>

      <body>
        <header>My Team</header>
        <div class="container">
        <div class="row row-cols-1 row-cols-md-3">
          
            ${generateCard(data)}
          </div>
        </div>
        </div>
      </body>

    </html>`;
};


function generateCard(data) {
  return `
    <div class="col">
      <div class="card" style="width: 200px">
          <div class="card-body bg-primary">
            <h5 class="card-title">${data[0].getName()}</h5>
            <p class="card-text">${data[0].getRole()}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data[0].getId()}</li>
            <li class="list-group-item">Email: 
              <a href="mailto:${data[0].getEmail()}">${data[0].getEmail()}</a>
            </li>
            <li class="list-group-item">Office Number: ${data[0].getOfficeNumber()}</li>
          </ul>
        </div>
    </div>
    <div class="col">
      <div class="card" style="width: 200px">
        <div class="card-body bg-primary">
          <h5 class="card-title">${data[1].getName()}</h5>
          <p class="card-text">${data[1].getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${data[1].getId()}</li>
          <li class="list-group-item">Email: 
            <a href="mailto:${data[0].getEmail()}">${data[0].getEmail()}</a>
          </li>
          <li class="list-group-item">Github: 
            <a href="https://github.com/${data[1].getGithub()}" target="_blank">${data[1].getGithub()}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="col">
      <div class="card" style="width: 200px">
        <div class="card-body bg-primary">
          <h5 class="card-title">${data[2].getName()}</h5>
          <p class="card-text">${data[2].getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${data[2].getId()}</li>
          <li class="list-group-item">Email:
            <a href="mailto:${data[0].getEmail()}">${data[0].getEmail()}</a>
          </li>
          <li class="list-group-item">School: ${data[2].getSchool()}</li>
        </ul>
      </div>
    </div>`;
};

module.exports = generateHTML;
let taskCount = 0;

function createTask() {
  let taskText;

  if ($('#todo_input').val()) {
    taskText = $('#todo_input').val();
  } else {
    return;
  }

  newTask = `
  <div class="row mt-3" id="task_`+ taskCount + `">
    <div class="col-md-1 col-xs-12"></div>
    <div class="col-md-9 col-xs-12" id="todo_item">
      <div class="d-flex justify-content-center">
        <div class="p-3 mt-0 mb-0 w-100 h-75 form-group shadow bg-light rounded border border-light">
          <div class="mt-0 mb-0">
            <div class="mt-0 mb-0">
              <h2 class="text-secondary text-left">`+ taskText + `</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-1 col-xs-12" onclick="removeTask(`+ taskCount + `);">
      <div class="d-flex justify-content-center mt-1">
        <div class="p-3 mt-0 mb-0 form-group shadow bg-light rounded border border-light float-up">
          <div class="mt-0 mb-0">
            <div class="mt-0 mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#2368a2"
                class="bi bi-check-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path fill-rule="evenodd"
                  d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-1 col-xs-12"></div>
  </div>`;

  $(newTask).hide().appendTo('#todo_zone').fadeIn(300);
  taskCount++;
}

function removeTask(id) {
  $('#task_' + id).hide('fast', function () { $('#task_' + id).remove(); });
}

$(document).ready(function () {
  let d = new Date();

  let month = d.getMonth() + 1;
  let day = d.getDate();

  // let todayString = d.getFullYear() + '/' +
  //   (month < 10 ? '0' : '') + month + '/' +
  //   (day < 10 ? '0' : '') + day;

  const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  $('#date_text').text(weekdayNames[d.getDay()] + ', ' + monthNames[d.getMonth()] + ' ' + day);

  for (let i = 0; i < 0; i++) {
    createTask();
  }
});

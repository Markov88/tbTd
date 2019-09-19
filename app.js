const selectors = {
  email: '[name = email]',
  rows: '#customers tbody tr',
  emailCell: '.email-cell',
  notification: '#result'
}

const notificationText = {
  success: 'deleted',
  error: 'not found'
}

const getMail = () => document.querySelector(selectors.email).value
const getRows = () => document.querySelectorAll(selectors.rows)

const getRowToDelete = (rows, email) =>
  [...rows].find(row =>
    email == row.querySelector(selectors.emailCell).innerHTML)


const deleteRow = (row) => row.remove()

const clearEmail = () => {
  document.querySelector(selectors.email).value = ''
}

const succesNotification = () => {
  document.querySelector(selectors.notification)
    .innerHTML = notificationText.success
}
const setErrorNotif = () => {
  document.querySelector(selectors.notification)
    .innerHTML = notificationText.error
}

const deleteByEmail = () => {
  const email = getMail()
  const rows = getRows()
  const rowToDelete = getRowToDelete(rows, email)
  if (rowToDelete) {
    deleteRow(rowToDelete)
    succesNotification()
  } else {
    setErrorNotif()
  }
  clearEmail()
}

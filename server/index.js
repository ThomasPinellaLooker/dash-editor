const express = require('express')
const path = require('path')
const app = express()
const fs = require('fs')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

// For production:
app.use(express.static(path.join(__dirname, '../build')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

app.get('/get_dashboard', function (req, res) {
  const rawdata = fs.readFileSync(path.join(__dirname, 'data.json'))
  const dashboard = JSON.parse(rawdata)
  return res.send(dashboard)
})

app.put('/update_dashboard', function (req, res) {
  const file = path.join(__dirname, 'data.json')
  fs.writeFileSync(file, '')
  fs.writeFileSync(file, JSON.stringify(req.body, null, 2))

  const newDash = JSON.parse(fs.readFileSync(file))
  return res.send(newDash)
})

app.post('/add_element', function (req, res) {
  const id = Math.random()+''
  const element = {
    id,
    ...req.body.element,
  }
  const layoutComponent = {
    id,
    ...req.body.layoutComponent,
  }

  const file = path.join(__dirname, 'data.json')
  const rawdata = fs.readFileSync(file)
  const dashboard = JSON.parse(rawdata)

  const newDashboard = {
    ...dashboard,
    elements: {
      ...dashboard.elements,
      [id]: element,
    },
    layoutComponents: {
      ...dashboard.layoutComponents,
      [id]: layoutComponent,
    }
  }

  fs.writeFileSync(file, '')
  fs.writeFileSync(file, JSON.stringify(newDashboard, null, 2))

  return res.send({
    element,
    layoutComponent,
  })
})

app.delete('/delete_elements', function (req, res) {
  const dashboard = getDashboard()
  const elements = removeIds(dashboard.elements, req.body)

  setDashboard({
    ...dashboard,
    elements,
  })
  return res.send(true)
})

app.delete('/delete_layout_components', function (req, res) {
  const dashboard = getDashboard()
  const layoutComponents = removeIds(dashboard.layoutComponents, req.body)

  setDashboard({
    ...dashboard,
    layoutComponents,
  })
  return res.send(true)
})

app.listen(process.env.PORT || 5000)

const getDashboard = () => {
  const rawdata = fs.readFileSync(path.join(__dirname, 'data.json'))
  const dashboard = JSON.parse(rawdata)
  return dashboard
}

const setDashboard = (dashboard) => {
  const file = path.join(__dirname, 'data.json')
  fs.writeFileSync(file, '')
  fs.writeFileSync(file, JSON.stringify(dashboard, null, 2))
}

const removeIds = (obj, deletedIds) => {
  return Object.keys(obj)
    .filter(key => !deletedIds.includes(key))
    .reduce((acc, key) => {
      return {
        ...acc,
        [key]: {
          ...obj[key]
        }
      }
    }, {})
}

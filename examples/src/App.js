import { Button } from 'react-ui-library';

function App() {
  return (
    <div className='App'>
      <h1>contained</h1>
      <Button variant="contained">
        contained Button
      </Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
      <h1>Text</h1>
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons" color="primary">
        Link
      </Button>

      <h1>outlined</h1>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" color="primary" href="#outlined-buttons">
        Link
      </Button>

      <h1>size</h1>
      <Button size="small">
        Small
      </Button>
      <Button size="medium">
        Medium
      </Button>
      <Button size="large">
        Large
      </Button>
      <Button variant="outlined" size="small" color="primary">
        Small
      </Button>
      <Button variant="outlined" size="medium" color="primary">
        Medium
      </Button>
      <Button variant="outlined" size="large" color="primary" >
        Large
      </Button>
      <Button variant="contained" size="small" color="primary">
        Small
      </Button>
      <Button variant="contained" size="medium" color="primary">
        Medium
      </Button>
      <Button variant="contained" size="large" color="primary" >
        Large
      </Button>
    </div>
  );
}

export default App;

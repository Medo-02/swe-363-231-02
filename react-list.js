class ElementList extends React.Component {
    render() {
      const places = [
        'Paris, Frence',
        'Tokyo, Japan',
        'New Orleans, USA',
      ];
  
      const elementItems = places.map((element, index) => {
        return React.createElement('li', { key: index }, element);
      });
  
      return React.createElement('div', null,
        React.createElement('h2', null, 'List of the places:'),
        React.createElement('ul', null, elementItems)
      );
    }
  }
  
  const rootElement = document.getElementById("element-list-root");
  ReactDOM.render(React.createElement(ElementList), rootElement);
  
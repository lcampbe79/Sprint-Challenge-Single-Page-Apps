import React from "react";
import { Tab, Menu} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

function NavItem(props) {
  return (
    <NavLink exact {...props} /> 
  );
}

const panes = [
    { menuItem: <Menu.Item
        key="home"
        as={NavItem}
        to="/"
        content={<span>Home Page</span>} />
    },
    { menuItem: <Menu.Item
        key="characters"
        as={NavItem}
        to="/characters"
        content={<span>Characters</span>} />
    },
    { menuItem: <Menu.Item
        key="locations"
        as={NavItem}
        to="/locations"
        content={<span>Locations</span>} />
    },
    { menuItem: <Menu.Item
      key="episodes"
      as={NavItem}
      to="/episodes"
      content={<span>Episodes</span>} />
    }
  ]
export default function TabNav() {
  return (
      <div>
        <Tab panes={panes} />
      </div>
    )
};

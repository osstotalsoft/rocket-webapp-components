import React from "react";
import renderer from "react-test-renderer";
import SideMenu from "../../components/SideMenu/SideMenu";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

describe("SideMenu", () => {
  it("Snapshot", () => {
    const component = renderer.create(
      <SideMenu
        icon={MenuOpenIcon}
        content={"Content of the side-menu"}
      />
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

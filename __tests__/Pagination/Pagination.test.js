import React from "react";
import renderer from "react-test-renderer";
import Pagination from "../../components/Pagination/Pagination";

describe("Pagination", () => {
  it("Snapshot", () => {
    const component = renderer.create(
      <Pagination
        totalCount={100}
        pageSize={100}
        page={0}
        onChangeRowsPerPage={() => { }}
        onChangePage={() => { }}
        onRefresh={() => { }}
        loading={false}
        instanceOfTranslation={() => { }}
      />
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

import FormatDate from "./FormatDate";

it("renders correctly", () => {
  const wrapper = shallow(
    <FormatDate dateString="2001-01-01" />
  );

  expect(wrapper).toMatchSnapshot();
});

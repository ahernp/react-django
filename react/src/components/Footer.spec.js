import Footer from "./Footer";

it("renders correctly", () => {
  const wrapper = shallow(
    <Footer />
  );

  expect(wrapper).toMatchSnapshot();
});

it("renders its children", () => {
  const wrapper = shallow(
    <Footer>
        Hello Mum
    </Footer>
  );

  expect(wrapper).toMatchSnapshot();
});

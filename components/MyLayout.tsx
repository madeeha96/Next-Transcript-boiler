import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

export interface ILayoutProps {
  children: JSX.Element;
}

const Layout = (props: ILayoutProps) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;

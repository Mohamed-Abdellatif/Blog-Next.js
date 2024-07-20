import MainNavigation from "./main-naigation";

const Layout = (props) => {
    return (
        <>
        <MainNavigation/>
        <main>{props.children}</main>
        </>
    );
};

export default Layout;
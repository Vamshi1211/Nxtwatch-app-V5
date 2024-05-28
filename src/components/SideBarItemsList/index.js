// import {
//   SideBarItem,
//   SideBarText,
//   HomeIcon,
//   NavLink,
//   TrendingIcon,
//   GamingIcon,
//   SavedIcon,
// } from './styledComponents'

// import ThemeContext from '../../context/ThemeContext'

// const SideBarItemsList = () => (
//   <ThemeContext.Consumer>
//     {value => {
//       const {isDarkTheme} = value

//       return (
//         <>
//           <NavLink to="/">
//             <SideBarItem onClick={}>
//               <HomeIcon isdarktheme={isDarkTheme.toString()} />
//               <SideBarText isDarkTheme={isDarkTheme}>Home</SideBarText>
//             </SideBarItem>
//           </NavLink>

//           <NavLink to="/trending">
//             <SideBarItem>
//               <TrendingIcon isdarktheme={isDarkTheme.toString()} />
//               <SideBarText isDarkTheme={isDarkTheme}>Trending</SideBarText>
//             </SideBarItem>
//           </NavLink>

//           <NavLink to="/gaming">
//             <SideBarItem>
//               <GamingIcon isdarktheme={isDarkTheme.toString()} />
//               <SideBarText isDarkTheme={isDarkTheme}>Gaming</SideBarText>
//             </SideBarItem>
//           </NavLink>

//           <NavLink to="/saved-videos">
//             <SideBarItem>
//               <SavedIcon isdarktheme={isDarkTheme.toString()} />
//               <SideBarText isDarkTheme={isDarkTheme}>Saved Videos</SideBarText>
//             </SideBarItem>
//           </NavLink>
//         </>
//       )
//     }}
//   </ThemeContext.Consumer>
// )

// export default SideBarItemsList

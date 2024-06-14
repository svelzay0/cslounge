export interface IMenuItem {
	title: string
	url: string
	icon: string
}

export const MENU_DATA: IMenuItem[] = [
  {
    title: "Home",
    url: "/",
    icon: "mdi-home",
  },
  {
    title: "My Account",
    url: "/account",
    icon: "mdi-account",
  },
  {
    title: "Cards",
    url: "/cards",
    icon: "mdi-cards",
  },
  {
    title: "Boxes",
    url: "/boxes",
    icon: "mdi-cards",
  },
]

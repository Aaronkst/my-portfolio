export interface HobbyGroup {
  label: string;
  items: string[];
}

export const hobbyGroups: HobbyGroup[] = [
  { label: "Interests", items: ["Warcraft", "Football", "Vikings"] },
  {
    label: "Hobbies",
    items: ["Gaming", "Unreal Engine Game Dev", "Cafe Hopping"],
  },
];

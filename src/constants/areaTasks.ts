export type AreaNameLabels =
  | "キッチン"
  | "リビング"
  | "ダイニング"
  | "寝室"
  | "バスルーム"
  | "トイレ"
  | "玄関";

export type AreaNameValues =
  | "kitchen"
  | "living"
  | "dining"
  | "bedroom"
  | "bathroom"
  | "toilet"
  | "entrance";

export interface AreaNames {
  label: AreaNameLabels;
  value: AreaNameValues;
}

export const AREA_NAMES: AreaNames[] = [
  { label: "キッチン", value: "kitchen" },
  { label: "リビング", value: "living" },
  { label: "ダイニング", value: "dining" },
  { label: "寝室", value: "bedroom" },
  { label: "バスルーム", value: "bathroom" },
  { label: "トイレ", value: "toilet" },
  { label: "玄関", value: "entrance" },
];

export const AREA_TASK = {
  kitchen: [
    { label: "ホコリ取り", id: "" },
    { label: "掃除機がけ", value: "" },
    { label: "シンク", value: "" },
    { label: "片付け", value: "" },
    { label: "食器整理", value: "" },
    { label: "冷蔵庫", value: "" },
    { label: "コンロ", value: "" },
    { label: "オーブン", value: "" },
  ],
  living: [
    { label: "ホコリ取り", value: "" },
    { label: "掃除機がけ", value: "" },
    { label: "水拭き", value: "" },
    { label: "壁", value: "" },
    { label: "棚整理", value: "" },
    { label: "片付け", value: "" },
  ],
  dining: [
    { label: "ホコリ取り", value: "" },
    { label: "掃除機がけ", value: "" },
    { label: "水拭き", value: "" },
    { label: "壁", value: "" },
  ],
  bedroom: [
    { label: "ホコリ取り", value: "" },
    { label: "掃除機がけ", value: "" },
    { label: "水拭き", value: "" },
    { label: "壁", value: "" },
  ],
  bathroom: [
    { label: "ホコリ取り", value: "" },
    { label: "掃除機がけ", value: "" },
    { label: "水拭き", value: "" },
    { label: "壁", value: "" },
  ],
  toilet: [
    { label: "ホコリ取り", value: "" },
    { label: "掃除機がけ", value: "" },
    { label: "水拭き", value: "" },
    { label: "壁", value: "" },
  ],
  entrance: [
    { label: "ホコリ取り", value: "" },
    { label: "掃除機がけ", value: "" },
    { label: "水拭き", value: "" },
    { label: "壁", value: "" },
  ],
};

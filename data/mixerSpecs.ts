
export interface MixerItem {
  srNo: string;
  category: string;
  layer1: string;
  layer2: string;
  layer3: string;
  layer4: string;
}

export interface MixerGroup {
  type: string;
  items: MixerItem[];
}

export const mixerSpecs: MixerGroup[] = [
  {
    type: "Green Mixer",
    items: [
      { srNo: "1", category: "HDPE", layer1: "25 kg", layer2: "25 kg", layer3: "25 kg", layer4: "25 kg" },
      { srNo: "2", category: "Green", layer1: "0.100 g", layer2: "0.100 g", layer3: "0", layer4: "0" },
      { srNo: "3", category: "Yollow", layer1: "0.012 g", layer2: "0.012 g", layer3: "0", layer4: "0" },
      { srNo: "4", category: "Green Crush", layer1: "10 kg", layer2: "10 kg", layer3: "0", layer4: "0" },
      { srNo: "5", category: "Filler Calcium", layer1: "5 kg", layer2: "10 kg", layer3: "5 kg", layer4: "0" },
      { srNo: "6", category: "Black", layer1: "0", layer2: "0", layer3: "0", layer4: "0" },
      { srNo: "7", category: "White", layer1: "0", layer2: "0", layer3: "0.300 g", layer4: "5 kg" },
      { srNo: "8", category: "Recycle Black", layer1: "0", layer2: "0", layer3: "0", layer4: "0" },
      { srNo: "9", category: "Recycle White", layer1: "0", layer2: "10", layer3: "0", layer4: "0" }
    ]
  },
  {
    type: "Black Mixer",
    items: [
      { srNo: "1", category: "HDPE", layer1: "25 kg", layer2: "0", layer3: "25 kg", layer4: "25 kg" },
      { srNo: "2", category: "Green", layer1: "0", layer2: "0", layer3: "0", layer4: "0" },
      { srNo: "3", category: "Yollow", layer1: "0", layer2: "0", layer3: "0", layer4: "0" },
      { srNo: "4", category: "Black Crush", layer1: "10 kg", layer2: "20", layer3: "0", layer4: "0" },
      { srNo: "5", category: "Filler Calcium", layer1: "5 kg", layer2: "0", layer3: "5 kg", layer4: "0" },
      { srNo: "6", category: "Black", layer1: "0.150 kg", layer2: "0.050 g", layer3: "0", layer4: "0" },
      { srNo: "7", category: "White", layer1: "0", layer2: "0", layer3: "0.125 g", layer4: "5 kg" },
      { srNo: "8", category: "Recycle Black", layer1: "0", layer2: "25 kg", layer3: "0", layer4: "0" },
      { srNo: "9", category: "Recycle White", layer1: "0", layer2: "0", layer3: "0", layer4: "0" }
    ]
  }
];

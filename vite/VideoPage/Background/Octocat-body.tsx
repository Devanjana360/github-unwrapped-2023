import { getLength, getPointAtLength } from "@remotion/paths";
import { createRef } from "react";

export const bodyRef = createRef<SVGGElement>();

export const OctocatBody: React.FC<{
  d: string;
  progress: number;
  endOffsetX: number;
  endOffsetY: number;
  rotation: number;
}> = ({ d, progress, endOffsetX, endOffsetY, rotation }) => {
  const length = getLength(d);
  const endPosition = getPointAtLength(d, length);

  const currentPosition = getPointAtLength(d, length * progress);

  const offsetX = currentPosition.x - endPosition.x;
  const offsetY = currentPosition.y - endPosition.y;

  return (
    <g
      style={{
        transform: `translateX(${offsetX}px) translateY(${offsetY}px)`,
      }}
    >
      <g
        style={{
          transformBox: "view-box",
          transformOrigin: `${1117}px ${823}px`,
          transform: `rotate(${rotation}rad)`,
        }}
      >
        <g ref={bodyRef} transform={`translate(${endOffsetX} ${endOffsetY})`}>
          <path
            d="M1129.21 750.58C1126.44 746.92 1120.21 742.67 1119.22 742.77C1118.33 742.87 1117.54 750.38 1117.54 750.38L1129.11 751.57"
            fill="#203957"
          />
          <path
            d="M1130.98 877.32C1131.08 876.13 1131.97 874.35 1132.27 872.28C1132.57 870.21 1130.59 855.87 1128.32 851.42C1126.05 846.97 1124.46 844.6 1121.6 841.73C1118.63 838.86 1112.7 834.22 1110.92 831.25C1109.14 828.28 1116.16 830.66 1116.16 830.66L1125.35 837.09L1132.47 845.3L1135.63 855.68L1135.83 864.38L1135.14 871.3L1132.77 876.15L1130.99 877.34L1130.98 877.32Z"
            fill="#8974A3"
          />
          <path
            d="M1132.83 869.32C1133.05 869.29 1132.99 867.43 1132.71 865.15C1132.43 862.87 1132.02 861.05 1131.8 861.08C1131.58 861.11 1131.64 862.97 1131.92 865.25C1132.2 867.53 1132.61 869.35 1132.83 869.32Z"
            fill="#65CAC6"
          />
          <path
            d="M1131.67 858.84C1131.88 858.78 1131.55 856.94 1130.92 854.74C1130.3 852.53 1129.62 850.79 1129.41 850.85C1129.2 850.91 1129.53 852.75 1130.16 854.95C1130.78 857.16 1131.46 858.9 1131.67 858.84Z"
            fill="#65CAC6"
          />
          <path
            d="M1128.1 848.84C1128.28 848.72 1127.45 847.06 1126.22 845.11C1125 843.17 1123.86 841.69 1123.68 841.8C1123.5 841.92 1124.33 843.58 1125.56 845.53C1126.78 847.47 1127.92 848.95 1128.1 848.83V848.84Z"
            fill="#65CAC6"
          />
          <path
            d="M1119.27 839.04C1119.43 838.89 1118.28 837.42 1116.71 835.74C1115.14 834.07 1113.74 832.84 1113.58 832.99C1113.42 833.14 1114.57 834.61 1116.14 836.29C1117.71 837.96 1119.11 839.19 1119.27 839.04Z"
            fill="#65CAC6"
          />
          <path
            opacity="0.48"
            d="M1125.35 837.17L1116.16 830.74C1116.16 830.74 1109.04 828.47 1110.92 831.33C1112.8 834.2 1118.73 838.94 1121.6 841.81C1124.57 844.68 1126.05 847.05 1128.32 851.5C1128.81 852.39 1129.21 853.67 1129.61 855.16C1131.69 853.48 1132.87 850.22 1132.77 846.56L1132.47 845.47L1125.35 837.17Z"
            fill="#1A131E"
          />
          <path
            d="M1116.07 825.61C1117.36 831.34 1125.76 829.76 1132.09 836.88C1138.42 844 1140.99 854.77 1139.7 860.41C1138.41 866.05 1133.57 879.19 1131 877.32C1132.78 872.28 1134.06 871.19 1132.98 863.08C1131.89 854.97 1129.82 846.87 1125.57 843.31C1120.63 839.26 1115.29 833.13 1109.75 829.47C1105.6 826.8 1116.08 825.61 1116.08 825.61H1116.07Z"
            fill="#203957"
          />
          <path
            opacity="0.48"
            d="M1133.96 869.31C1134.65 862.88 1133.66 856.26 1131.09 850.33C1130.99 850.03 1130.89 849.74 1130.89 849.54C1130.99 849.24 1131.19 849.15 1131.38 848.95C1132.47 848.06 1135.93 845.88 1136.72 844.11C1136.32 843.32 1136.03 842.63 1135.53 841.93C1133.75 841.34 1130.69 841.83 1129.5 842.03C1128.21 842.33 1126.93 842.82 1125.84 843.61C1129.89 847.27 1131.97 855.28 1132.96 863.19C1134.05 871.3 1132.76 872.38 1130.98 877.43C1132.96 878.91 1136.42 871.2 1138.39 865.17C1137.1 866.95 1136.02 868.93 1133.94 869.32L1133.96 869.31Z"
            fill="#1A131E"
          />
          <path
            opacity="0.48"
            d="M1119.62 837.96C1122.29 837.86 1124.96 837.57 1127.53 836.67C1128.32 836.37 1129.11 835.98 1129.51 835.29C1129.61 835.09 1129.71 834.99 1129.71 834.8C1128.72 834.01 1127.73 833.42 1126.84 832.92C1123.87 833.02 1120.91 833.32 1118.04 833.71C1117.94 833.41 1117.74 833.22 1117.64 832.92C1118.83 831.93 1119.42 830.65 1119.42 829.56C1118.33 829.07 1117.44 828.37 1116.85 827.58C1116.45 827.58 1116.06 827.68 1115.66 827.88C1114.08 828.47 1112.3 829.46 1111.8 831.04C1114.47 833.02 1117.04 835.49 1119.61 837.96H1119.62Z"
            fill="#1A131E"
          />
          <path
            d="M1051.12 827.09C1052.11 827.58 1051.52 825.9 1052.41 823.93C1053.4 821.95 1056.56 818.2 1062.1 819.68C1067.64 821.16 1074.26 832.63 1084.64 833.13C1095.02 833.72 1101.74 831.05 1103.42 825.22C1105.1 819.49 1100.95 822.85 1100.95 822.85L1094.92 827.69L1089.28 829.57L1079.99 823.74L1074.16 815.83L1061.9 810.49L1053.6 812.37L1049.74 816.52C1049.74 816.52 1048.75 815.63 1048.95 819.49C1049.15 823.54 1050.14 826.61 1051.12 827.1V827.09Z"
            fill="#8974A3"
          />
          <path
            d="M1099.82 829.7C1101.31 828.79 1102.43 827.9 1102.32 827.72C1102.21 827.53 1100.9 828.12 1099.41 829.03C1097.92 829.94 1096.8 830.83 1096.91 831.01C1097.02 831.2 1098.33 830.61 1099.82 829.7Z"
            fill="#65CAC6"
          />
          <path
            d="M1078.89 828.88C1079.29 827.2 1086.6 831.35 1086.6 831.35L1084.43 832.64C1084.43 832.54 1078.5 830.07 1078.89 828.88Z"
            fill="#65CAC6"
          />
          <path
            d="M1057.14 815.82C1061.29 814.63 1062.97 816.12 1062.97 817.01C1062.87 817.9 1060.5 816.81 1057.73 817.7C1054.96 818.59 1054.27 821.06 1053.18 820.47C1051.89 819.88 1054.86 816.42 1057.13 815.82H1057.14Z"
            fill="#65CAC6"
          />
          <path
            d="M1067.02 819.68C1068.01 818.3 1076.21 824.33 1074.73 825.81C1073.25 827.39 1066.13 820.87 1067.02 819.68Z"
            fill="#65CAC6"
          />
          <path
            opacity="0.12"
            d="M1051.12 827.09C1052.11 827.58 1051.52 825.9 1052.41 823.93C1053.4 821.95 1056.56 818.2 1062.1 819.68C1067.64 821.16 1074.26 832.63 1084.64 833.13C1095.02 833.72 1101.74 831.05 1103.42 825.22C1105.1 819.49 1100.95 822.85 1100.95 822.85L1094.92 827.69L1089.28 829.57L1079.99 823.74L1074.16 815.83L1061.9 810.49L1053.6 812.37L1049.74 816.52C1049.74 816.52 1048.75 815.63 1048.95 819.49C1049.15 823.54 1050.14 826.61 1051.12 827.1V827.09Z"
            fill="#1A131E"
          />
          <path
            d="M1105.19 819.08C1102.22 824.42 1100.44 829.26 1094.91 830.15C1089.37 831.04 1082.35 829.66 1074.15 820.96C1065.94 812.26 1057.64 811.17 1053.59 814.73C1049.54 818.29 1049.14 824.91 1051.22 826.59C1046.97 821.94 1045.09 813.64 1054.09 807.61C1063.09 801.58 1072.18 806.42 1076.83 814.83C1081.48 823.23 1091.56 830.35 1096.9 826.49C1102.24 822.64 1103.33 816.31 1103.33 816.31L1105.21 819.08H1105.19Z"
            fill="#203957"
          />
          <path
            d="M1051.11 826.51C1048.34 823.54 1046.76 819.1 1047.95 815.04C1048.94 811.48 1051.71 808.81 1054.77 806.93C1063.37 801.69 1072.37 806.53 1076.82 814.64H1076.72C1075.63 812.96 1074.35 811.38 1072.77 809.99C1066.15 803.86 1058.24 804.16 1051.71 810.29C1047.85 813.95 1047.16 818.99 1049.53 823.74C1050.02 824.83 1050.52 825.72 1051.11 826.51Z"
            fill="#646E87"
          />
          <path
            opacity="0.48"
            d="M1095.09 830.65C1099.14 829.86 1101.02 826.99 1103 823.43V823.13L1100.43 822.83C1099.54 824.21 1098.26 825.7 1096.57 826.88C1096.17 827.18 1095.78 827.37 1095.28 827.57L1095.08 830.64L1095.09 830.65Z"
            fill="#1A131E"
          />
          <path
            opacity="0.48"
            d="M1064.46 813.84C1067.72 815.03 1071.28 817.3 1074.84 821.16C1080.28 826.99 1085.22 829.56 1089.57 830.35C1090.26 829.36 1090.95 828.27 1091.05 827.29C1090.06 826.99 1089.07 826.6 1088.08 826C1087.68 826.2 1087.29 826.49 1086.99 826.49C1085.31 826.88 1083.63 826.29 1082.15 825.5C1079.18 824.02 1076.42 822.14 1073.85 819.96C1071.08 817.39 1068.12 814.32 1064.46 813.83V813.84Z"
            fill="#1A131E"
          />
          <path
            d="M1088.38 877.51C1091.44 878.6 1093.22 878.7 1093.22 877.41C1093.12 876.12 1090.75 877.51 1088.47 869.5C1086.1 861.49 1084.22 854.67 1089.66 843.2C1095.1 831.73 1101.62 823.82 1102.22 819.47C1102.81 815.12 1098.27 820.56 1098.27 820.56L1081.76 843.3L1078.7 855.56L1079.59 865.05L1088.39 877.51H1088.38Z"
            fill="#8974A3"
          />
          <path
            d="M1094.71 830.95C1095.4 831.44 1100.74 823.34 1100.44 823.04C1100.14 822.55 1094.11 830.55 1094.71 830.95Z"
            fill="#65CAC6"
          />
          <path
            d="M1086.8 871.78C1088.48 871.98 1086.7 867.33 1086.31 866.05C1085.91 864.77 1086.01 861.6 1084.73 861.6C1083.44 861.7 1084.24 864.47 1084.63 866.25C1084.93 867.93 1086.01 871.79 1086.8 871.79V871.78Z"
            fill="#65CAC6"
          />
          <path
            d="M1083.74 855.76C1084.43 855.96 1087.4 847.26 1086.31 846.56C1085.32 845.97 1082.45 855.46 1083.74 855.76Z"
            fill="#65CAC6"
          />
          <path
            d="M1087.48 842.61C1088.77 843.01 1093.41 834.9 1092.52 834.21C1091.63 833.62 1086.39 842.32 1087.48 842.61Z"
            fill="#65CAC6"
          />
          <path
            opacity="0.12"
            d="M1088.38 877.51C1091.44 878.6 1093.22 878.7 1093.22 877.41C1093.12 876.12 1090.75 877.51 1088.47 869.5C1086.1 861.49 1084.22 854.67 1089.66 843.2C1095.1 831.73 1101.62 823.82 1102.22 819.47C1102.81 815.12 1098.27 820.56 1098.27 820.56L1081.76 843.3L1078.7 855.56L1079.59 865.05L1088.39 877.51H1088.38Z"
            fill="#1A131E"
          />
          <path
            d="M1101.73 806.73C1099.95 813.35 1097.97 818.4 1091.25 824.72C1084.53 831.05 1072.07 839.25 1070.98 850.03C1069.89 860.81 1077.41 876.23 1090.46 877.91C1082.16 872.47 1080.08 856.36 1083.64 846.47C1087.2 836.68 1101.34 822.94 1102.92 817.9C1104.5 812.86 1104.7 807.32 1104.7 807.32L1101.73 806.73Z"
            fill="#203957"
          />
          <path
            d="M1101.83 806.72C1101.04 811.27 1099.56 815.72 1096.89 819.47C1094.91 822.34 1092.44 824.81 1089.87 827.08C1083.25 833.01 1073.85 839.54 1071.38 848.33C1071.18 848.92 1071.08 849.42 1070.98 850.01H1070.88C1071.08 847.74 1071.87 845.56 1072.86 843.49C1078.3 833.31 1089.37 828.07 1096.19 818.97C1097.48 817.09 1098.66 815.12 1099.55 813.04C1100.44 810.96 1101.03 808.79 1101.63 806.61C1101.73 806.71 1101.83 806.71 1101.83 806.71V806.72Z"
            fill="#646E87"
          />
          <path
            opacity="0.48"
            d="M1103.4 811.28C1102.61 810.59 1101.62 810.29 1100.63 810.39C1099.84 812.66 1098.95 814.84 1097.66 817.01C1098.15 818 1098.75 818.99 1098.85 820.17C1098.95 822.35 1097.27 824.03 1095.79 825.51C1091.34 829.96 1087.09 834.7 1084.12 840.14C1081.06 845.68 1079.37 852 1080.17 858.23C1080.37 860.11 1080.86 862.08 1080.57 863.96C1080.27 865.84 1078.89 867.82 1077.01 868.01C1076.61 868.01 1076.12 868.01 1075.72 867.91C1079.08 873.05 1084.12 877.1 1090.35 877.9C1082.05 872.46 1079.97 856.35 1083.53 846.46C1087.09 836.67 1101.23 822.93 1102.81 817.89C1103.4 816.01 1103.8 813.93 1104.1 812.25C1104 811.85 1103.7 811.56 1103.41 811.26L1103.4 811.28Z"
            fill="#1A131E"
          />
          <path
            d="M1120.61 817.8C1119.03 817.6 1117.45 817.11 1116.16 816.12L1118.43 813.15C1119.81 814.14 1121.99 814.44 1123.18 813.74C1123.48 813.54 1124.27 813.15 1124.07 811.37L1127.73 810.88C1128.13 813.55 1127.14 815.82 1125.06 816.91C1123.77 817.6 1122.19 817.9 1120.61 817.8Z"
            fill="#4081AD"
          />
          <path
            d="M1127.04 814.24C1126.55 813.65 1125.75 813.15 1125.06 812.95L1125.16 812.75C1125.95 813.05 1126.74 813.44 1127.24 814.13L1127.04 814.23V814.24Z"
            fill="#314868"
          />
          <path
            d="M1103.31 806.83C1101.43 813.65 1098.76 829.07 1099.95 835.6C1101.14 842.22 1104.99 850.82 1104.2 855.67C1103.41 860.41 1102.82 869.61 1103.41 875.64C1104 881.67 1105.88 885.53 1105.98 887.21C1106.08 888.89 1104.1 892.15 1106.18 892.35C1108.26 892.55 1118.24 882.27 1120.02 877.62C1122 872.58 1122.2 863.98 1118.54 858.04C1114.88 852.11 1108.26 841.83 1107.96 830.36C1107.66 818.89 1108.55 810.09 1108.55 810.09L1103.31 806.83Z"
            fill="#203957"
          />
          <path
            opacity="0.48"
            d="M1118.43 858.14C1116.45 854.98 1113.68 850.63 1111.51 845.49C1111.21 845.69 1111.02 845.88 1110.82 846.08C1109.44 847.56 1108.84 849.74 1108.84 851.72C1108.74 856.17 1111.41 860.62 1115.36 862.69C1116.74 863.48 1119.12 864.07 1120.7 863.38C1120.21 861.6 1119.51 859.72 1118.43 858.14Z"
            fill="#1A131E"
          />
          <path
            opacity="0.48"
            d="M1108.45 810.19L1103.31 806.83C1102.32 810.19 1101.23 815.73 1100.44 821.26C1100.44 821.26 1100.44 821.36 1100.54 821.36C1101.03 822.05 1106.08 826.6 1106.08 826.6C1105.59 829.37 1105.29 832.63 1107.46 834.41C1107.76 834.61 1107.95 834.81 1108.25 835C1108.05 833.52 1107.85 831.94 1107.85 830.45C1107.55 818.98 1108.44 810.18 1108.44 810.18L1108.45 810.19Z"
            fill="#1A131E"
          />
          <path
            d="M1117.94 809.59C1129.61 812.95 1136.33 813.05 1141.96 809.79C1147.69 806.43 1159.16 796.34 1158.87 783.39C1158.57 770.44 1151.16 758.77 1141.77 754.13C1138.8 748.79 1132.58 742.86 1131.19 742.86C1129.11 743.55 1125.36 749.29 1125.36 749.29C1120.22 748.99 1109.05 749.88 1102.62 760.56C1096.19 771.24 1097.87 780.43 1097.18 782.01C1096.49 783.59 1094.41 785.77 1093.92 788.34C1093.52 790.91 1092.93 796.55 1097.38 800.3C1101.83 804.16 1117.94 809.59 1117.94 809.59Z"
            fill="#203957"
          />
          <path
            d="M1125.45 749.39C1119.52 749.49 1113.29 751.17 1108.64 755.02C1105.48 757.49 1103.3 760.85 1101.52 764.41C1099.25 768.96 1098.16 774 1097.76 778.94C1097.66 779.93 1097.66 781.02 1097.27 782.01H1097.17C1097.37 781.52 1097.37 781.02 1097.37 780.53C1097.47 776.97 1097.77 773.31 1098.66 769.85C1100.24 763.92 1103.21 758.09 1108.05 754.33C1111.31 751.76 1115.27 750.18 1119.32 749.58C1121.4 749.28 1123.37 749.19 1125.45 749.28V749.38V749.39Z"
            fill="#646E87"
          />
          <path
            opacity="0.48"
            d="M1158.87 783.4C1158.57 772.23 1153.14 762.14 1145.72 756.51H1145.62C1145.52 756.41 1145.42 756.31 1145.22 756.21C1145.12 756.11 1144.92 756.01 1144.82 755.91C1144.72 755.81 1144.62 755.71 1144.42 755.61C1144.32 755.51 1144.12 755.41 1144.02 755.31H1143.92C1143.43 755.01 1143.03 754.72 1142.54 754.52C1142.24 754.42 1142.05 754.22 1141.75 754.13C1141.16 753.14 1140.46 752.05 1139.77 751.06C1140.07 751.75 1140.36 752.54 1140.46 753.33C1141.05 756.69 1139.57 760.45 1136.8 762.43C1132.45 762.33 1128.3 761.44 1128.99 757.59C1128.3 759.86 1127.7 762.73 1126.82 763.13C1127.91 764.12 1134.14 764.32 1139.28 763.53C1139.87 764.42 1140.47 766 1140.57 766.3C1141.26 767.98 1141.86 769.76 1142.35 771.54C1143.24 775.2 1143.54 778.96 1142.84 782.61C1141.36 789.93 1135.82 796.06 1129.1 799.12C1122.28 802.19 1114.47 802.38 1107.25 800.5C1103.59 799.51 1099.64 798.03 1095.98 798.72C1096.38 799.21 1096.87 799.71 1097.36 800.2C1101.81 803.96 1117.92 809.49 1117.92 809.49C1129.59 812.85 1136.31 812.95 1141.94 809.69C1147.67 806.53 1159.24 796.34 1158.84 783.39L1158.87 783.4Z"
            fill="#1A131E"
          />
          <path
            d="M1102.71 760.16C1103.8 761.54 1108.05 760.65 1110.22 760.95C1112.39 761.15 1118.03 765.1 1116.65 775.78C1115.27 786.46 1108.05 789.13 1106.66 790.51C1105.28 791.89 1105.97 793.77 1105.37 795.16C1104.78 796.54 1104.28 799.61 1101.22 800C1098.06 800.4 1094.6 798.71 1093.11 797.53C1091.63 796.34 1089.65 790.91 1090.34 789.23C1089.65 789.03 1088.86 788.24 1089.05 787.75C1089.25 787.26 1091.72 784.69 1093.5 784.39C1095.28 784.09 1095.87 783.6 1096.17 782.51C1096.17 781.52 1098.05 765.9 1102.69 760.17L1102.71 760.16Z"
            fill="#C09A8F"
          />
          <path
            d="M1100.45 799.12C1098.37 799.02 1096.5 798.13 1094.62 797.34C1093.53 796.94 1092.54 796.45 1091.65 795.66C1092.14 796.55 1092.54 797.34 1093.03 797.64C1094.51 798.83 1098.07 800.51 1101.14 800.11C1102.23 799.91 1103.02 799.42 1103.61 798.82C1102.62 799.02 1101.53 799.12 1100.45 799.12Z"
            fill="#C09A8F"
          />
          <path
            d="M1090.57 792.59C1090.57 792.49 1090.67 792.29 1090.67 792.09C1091.26 790.81 1092.25 791.3 1093.14 790.61C1094.03 790.02 1093.24 789.92 1092.35 789.62C1091.26 789.32 1090.27 789.22 1089.38 788.33C1089.18 788.13 1089.08 787.93 1088.89 787.84C1088.79 788.33 1089.48 789.13 1090.18 789.32C1089.98 789.91 1090.18 791.2 1090.58 792.58L1090.57 792.59Z"
            fill="#C09A8F"
          />
          <path
            d="M1116.66 775.68C1118.14 765.1 1112.41 761.15 1110.23 760.85C1108.05 760.55 1103.71 761.44 1102.72 760.06C1097.97 765.79 1096.2 781.32 1096 782.5C1095.9 782.9 1095.7 783.29 1095.51 783.49C1097.19 784.38 1098.97 784.48 1100.95 784.68C1102.63 784.88 1104.01 785.87 1105.2 787.15C1105.99 788.04 1106.68 788.93 1107.37 789.82C1109.45 788.44 1115.38 785.27 1116.66 775.68Z"
            fill="#B68F84"
          />
          <path
            d="M1096.98 785.47C1098.46 784.18 1101.03 783.79 1102.52 785.27C1100.64 784.58 1098.76 784.97 1096.98 785.47Z"
            fill="#BD9980"
          />
          <path
            d="M1097.97 784.97C1097.67 780.42 1098.56 771.03 1105.58 769.05C1107.66 773.8 1106.27 781.8 1102.12 784.77C1101.43 784.77 1100.83 784.57 1100.24 784.57C1099.75 784.67 1099.05 784.47 1097.97 784.96V784.97Z"
            fill="#DCE8E9"
          />
          <path
            d="M1105.68 769.05C1107.85 773.8 1106.57 781.7 1102.22 784.87L1102.12 784.77C1102.32 784.47 1102.52 784.18 1102.71 783.88C1104.49 780.62 1105.18 777.06 1105.48 773.4C1105.58 772.02 1105.58 770.73 1105.58 769.25L1105.68 769.05Z"
            fill="#B3DAD6"
          />
          <path
            d="M1104.89 767.88C1105.19 767.98 1105.48 768.18 1105.78 768.47C1106.47 769.26 1106.47 770.45 1106.67 771.44C1107.07 774.11 1107.07 776.88 1106.18 779.55C1105.69 780.84 1105.09 782.02 1104.1 783.01C1104.79 781.82 1105.29 780.64 1105.58 779.35C1106.27 776.78 1106.17 774.11 1105.98 771.54C1105.88 770.75 1105.88 769.86 1105.68 769.07C1105.58 768.58 1105.28 768.18 1104.89 767.88Z"
            fill="#784D6B"
          />
          <path
            d="M1102.21 774.03C1103.13 772.35 1103.33 770.7 1102.66 770.33C1101.99 769.96 1100.7 771.03 1099.79 772.7C1098.88 774.37 1098.67 776.03 1099.35 776.4C1100.02 776.77 1101.31 775.7 1102.22 774.03H1102.21Z"
            fill="#784D6B"
          />
          <path
            d="M1104.4 772.51C1104.43 772.24 1103.92 771.97 1103.27 771.9C1102.62 771.83 1102.07 772 1102.04 772.27C1102.01 772.54 1102.52 772.81 1103.17 772.88C1103.82 772.95 1104.37 772.78 1104.4 772.51Z"
            fill="white"
          />
          <path
            d="M1091.85 785.32C1092.56 785.89 1094.81 784.33 1095.24 784.19C1095.38 783.2 1093.97 782.5 1092.84 783.06C1091.85 783.62 1090.86 784.61 1091.85 785.32Z"
            fill="#784D6B"
          />
          <path
            d="M1108.94 792.49C1114.87 791.8 1116.35 792.19 1116.65 793.28C1116.95 794.27 1116.55 796.25 1115.07 795.75C1113.59 795.25 1111.12 794.17 1108.74 793.97C1107.85 793.77 1108.15 792.59 1108.94 792.49Z"
            fill="#203957"
          />
          <path
            opacity="0.64"
            d="M1116.76 793.19C1117.45 794.28 1117.16 796.16 1115.67 796.35C1115.37 796.35 1115.18 796.35 1114.88 796.25C1113.59 795.85 1112.41 795.36 1111.12 794.87C1110.33 794.57 1109.54 794.28 1108.75 793.88V793.78C1109.15 793.78 1109.64 793.88 1110.04 793.98C1111.72 794.28 1113.3 794.97 1114.88 795.46C1115.08 795.56 1115.28 795.56 1115.47 795.56C1116.16 795.56 1116.46 794.87 1116.56 794.37C1116.86 794.07 1116.76 793.68 1116.76 793.18V793.19Z"
            fill="#1A131E"
          />
          <path
            d="M1108.85 795.65C1113.89 798.72 1114.88 800 1114.49 800.99C1114.09 801.98 1112.61 803.26 1111.72 801.98C1110.83 800.69 1109.55 798.32 1107.86 796.64C1107.17 796.05 1108.16 795.16 1108.85 795.65Z"
            fill="#203957"
          />
          <path
            d="M1108.95 792.39C1110.24 792.19 1111.72 792.09 1113 792C1114.09 792 1116.26 791.9 1116.66 793.19H1116.56C1116.26 792.8 1115.87 792.7 1115.37 792.6C1114.88 792.6 1114.38 792.5 1113.89 792.6C1112.6 792.6 1111.22 792.7 1109.84 792.6C1109.74 792.6 1109.35 792.6 1108.95 792.4V792.39Z"
            fill="#646E87"
          />
          <path
            d="M1108.84 795.66C1109.93 796.35 1111.21 797.14 1112.2 797.93C1113.09 798.62 1114.87 799.91 1114.37 801.09H1114.27C1114.27 800.6 1113.97 800.2 1113.68 799.9C1113.38 799.6 1112.99 799.31 1112.59 799.01C1111.5 798.22 1110.41 797.43 1109.43 796.54C1109.33 796.14 1109.03 795.95 1108.84 795.65V795.66Z"
            fill="#646E87"
          />
          <path
            opacity="0.64"
            d="M1114.49 801C1114.09 801.99 1112.81 803.18 1111.82 802.19C1110.44 800.31 1109.45 798.24 1107.77 796.65V796.55C1108.56 796.95 1109.25 797.54 1109.85 798.23C1110.74 799.22 1111.43 800.31 1112.03 801.39C1112.03 801.49 1112.13 801.59 1112.13 801.59C1112.43 802.08 1112.92 801.89 1113.32 801.69C1113.81 801.59 1114.21 801.29 1114.51 801H1114.49Z"
            fill="#1A131E"
          />
          <path
            d="M1088.97 787.74C1089.66 788.73 1090.85 789.22 1092.03 789.32C1093.22 789.42 1094.4 789.02 1095.49 788.33C1095.89 788.92 1096.68 789.12 1097.27 789.22V789.32C1096.48 789.42 1095.59 789.42 1095 788.73L1095.69 788.93C1094.21 790.22 1092.03 790.61 1090.25 789.52C1089.66 789.13 1089.06 788.53 1088.96 787.74H1088.97Z"
            fill="#784D6B"
          />
          <path
            d="M1140.88 813.15L1140.58 812.46C1147.6 809.79 1153.83 805.34 1158.57 799.51C1163.41 793.58 1166.38 786.46 1167.27 779.05C1168.46 768.67 1165.49 758.49 1158.97 750.38C1152.15 741.88 1142.26 736.64 1131.09 735.45C1120.02 734.36 1109.04 737.53 1100.34 744.35C1091.54 751.27 1086.1 760.96 1084.92 771.73C1083.93 781.12 1086.3 790.51 1091.74 798.23L1091.15 798.62C1085.61 790.81 1083.14 781.22 1084.13 771.63C1085.32 760.66 1090.85 750.77 1099.85 743.75C1108.75 736.73 1119.82 733.57 1131.19 734.65C1142.56 735.74 1152.64 741.18 1159.56 749.78C1166.28 758.09 1169.25 768.46 1167.96 778.95C1167.07 786.56 1164.01 793.78 1159.06 799.81C1154.41 805.94 1148.09 810.49 1140.87 813.16L1140.88 813.15Z"
            fill="#C8F1FF"
          />
          <path
            d="M1101.23 805.83C1097.28 804.84 1091.24 799.6 1090.45 798.02C1110.91 801.68 1136.52 812.65 1137.8 814.13C1134.83 815.81 1123.86 813.44 1123.86 813.44L1101.22 805.83H1101.23Z"
            fill="#D3D7D7"
          />
          <path
            d="M1123.87 813.45C1123.87 813.45 1129.21 814.64 1133.46 814.74C1133.26 813.26 1132.37 811.87 1131.09 810.98C1130.89 810.78 1130.69 810.68 1130.4 810.59C1129.71 810.29 1129.02 810 1128.32 809.7C1127.43 809.5 1126.54 809.3 1125.55 809.3C1123.08 809.2 1120.51 809.7 1118.04 809.1C1117.55 809 1117.05 808.8 1116.75 808.51C1116.35 808.21 1116.16 807.92 1115.76 807.52C1113.78 805.44 1110.72 805.25 1107.95 804.85C1104 804.16 1100.24 802.77 1096.58 801.39C1095.1 800.8 1093.61 800.2 1092.33 799.22C1092.13 799.02 1091.74 798.63 1091.24 798.23C1090.94 798.13 1090.65 798.13 1090.35 798.03C1091.14 799.61 1097.17 804.85 1101.13 805.84L1123.87 813.45Z"
            fill="#8295A0"
          />
          <path
            d="M1101.13 804.75L1100.93 807.52L1120.21 814.34L1121.89 811.77L1101.13 804.75Z"
            fill="#314868"
          />
          <path
            d="M1107.56 811.66C1107.46 812.55 1107.26 830.54 1107.66 832.03C1108.06 833.51 1110.82 833.32 1110.82 833.32L1110.62 811.97L1107.56 811.67V811.66Z"
            fill="#314868"
          />
          <path
            d="M1110.73 811.97L1119.13 812.86C1119.13 812.86 1117.45 829.17 1117.25 832.14L1110.92 833.33L1110.72 811.98L1110.73 811.97Z"
            fill="#D3D7D6"
          />
          <path
            d="M1112.3 818.89L1112 826.21L1113.38 827.3L1113.87 817.91L1112.29 818.9L1112.3 818.89Z"
            fill="#314868"
          />
          <path
            d="M1113.88 817.9L1121.1 818.59C1121.1 818.59 1121.2 818.59 1121.1 818.69C1120.9 819.28 1119.22 825.61 1119.02 827.79C1119.02 827.79 1119.02 827.89 1118.92 827.79C1118.23 827.1 1114.47 827.2 1113.38 827.3H1113.28L1113.87 817.91L1113.88 817.9Z"
            fill="#4081AD"
          />
          <path
            d="M1114.39 817.01C1114.77 817.01 1115.08 816.7 1115.08 816.32C1115.08 815.94 1114.77 815.63 1114.39 815.63C1114.01 815.63 1113.7 815.94 1113.7 816.32C1113.7 816.7 1114.01 817.01 1114.39 817.01Z"
            fill="#FF55D7"
          />
          <path
            d="M1117.15 817.21C1117.59 817.21 1117.94 816.86 1117.94 816.42C1117.94 815.98 1117.59 815.63 1117.15 815.63C1116.71 815.63 1116.36 815.98 1116.36 816.42C1116.36 816.86 1116.71 817.21 1117.15 817.21Z"
            fill="#2FC8F2"
          />
          <path
            d="M1117 828.77L1113.25 828.92L1113.29 830.01L1117.04 829.86L1117 828.77Z"
            fill="#FFEB57"
          />
          <path
            d="M1117.44 821.16L1115.46 821.26C1114.17 822.45 1114.17 825.81 1116.05 825.61L1117.83 825.41L1117.43 821.16H1117.44Z"
            fill="#314868"
          />
          <path
            d="M1119.04 823.51C1119.16 822.31 1118.42 821.26 1117.39 821.16C1116.36 821.06 1115.42 821.94 1115.3 823.14C1115.18 824.34 1115.92 825.39 1116.95 825.49C1117.98 825.59 1118.92 824.71 1119.04 823.51Z"
            fill="#7E9AAD"
          />
          <path
            d="M1123.87 817.3L1123.67 817.2V817.1C1124.07 816.01 1123.57 814.63 1122.58 814.03L1122.68 813.83C1123.77 814.62 1124.26 816.1 1123.87 817.29V817.3Z"
            fill="#314868"
          />
          <path
            d="M1125.94 815.53C1125.84 815.04 1125.54 814.54 1125.05 814.24C1124.56 813.94 1124.06 813.75 1123.57 813.55L1123.67 813.35C1124.16 813.55 1124.76 813.75 1125.25 814.04C1125.74 814.44 1126.14 814.93 1126.24 815.42L1125.94 815.52V815.53Z"
            fill="#314868"
          />
          <path
            d="M1120.61 817.51V817.31H1120.81C1120.91 817.21 1121.11 817.01 1121.11 816.91C1121.41 816.02 1121.51 815.03 1121.41 814.04H1121.61C1121.71 815.03 1121.61 816.02 1121.31 816.91C1121.21 817.11 1121.11 817.4 1120.91 817.4C1120.81 817.5 1120.71 817.5 1120.61 817.5V817.51Z"
            fill="#314868"
          />
          <path
            d="M1118.83 817.3L1118.73 817.2C1119.52 816.41 1119.82 815.22 1119.92 814.13H1120.12C1119.92 815.22 1119.63 816.5 1118.83 817.29V817.3Z"
            fill="#314868"
          />
          <path
            d="M1108.74 819.98C1106.76 818.79 1101.52 815.23 1102.61 808.61C1102.61 808.61 1102.21 807.72 1101.72 807.62C1100.63 809.5 1098.75 821.16 1108.05 825.42H1109.34L1108.75 819.98H1108.74Z"
            fill="#0083AB"
          />
          <path
            d="M1101.53 811.47C1101.83 811.37 1102.91 811.57 1102.91 811.57L1103.6 815.13L1102.02 815.62L1101.53 811.47Z"
            fill="#7E9AAD"
          />
          <path
            d="M1109.24 819.88L1108.35 819.68L1108.65 820.47V825.22C1108.65 825.22 1107.66 825.12 1107.96 825.42C1108.26 825.72 1109.34 825.82 1109.34 825.82L1109.24 819.89V819.88Z"
            fill="#D3D7D6"
          />
          <path
            d="M1100.44 812.16C1100.14 812.75 1100.54 814.04 1100.64 814.24C1100.74 814.44 1101.04 814.83 1101.04 814.83L1100.15 815.33L1099.26 814.04V812.26L1099.75 811.67L1100.64 812.16"
            fill="#314868"
          />
          <path
            d="M1099.55 810.47L1101.03 810.27C1101.72 810.86 1102.32 812.44 1102.32 812.54C1102.22 812.74 1101.23 813.13 1101.23 813.13L1099.55 810.46V810.47Z"
            fill="#314868"
          />
          <path
            d="M1100.74 816.81H1102.03C1102.52 815.92 1102.13 813.75 1102.13 813.75H1101.34L1100.94 815.53L1100.74 816.72"
            fill="#314868"
          />
          <path
            d="M1102.53 812.36L1101.34 812.75C1100.94 811.37 1100.15 810.38 1099.56 810.58C1098.87 810.68 1098.57 811.87 1098.67 813.25L1097.88 813.45L1098.18 814.44L1098.97 814.34C1099.37 815.82 1100.16 816.91 1100.85 816.71C1101.44 816.61 1101.84 815.52 1101.74 814.04L1102.83 814.24L1102.53 812.36ZM1100.45 815.13C1100.15 815.23 1099.66 814.64 1099.56 813.84C1099.36 813.05 1099.56 812.36 1099.86 812.26C1100.16 812.16 1100.65 812.75 1100.75 813.55C1100.95 814.34 1100.85 815.03 1100.45 815.13Z"
            fill="#D3D7D6"
          />
          <path
            d="M1102.52 812.36H1104.1V814.53L1102.62 814.33L1102.52 812.35V812.36Z"
            fill="#314868"
          />
          <path
            d="M1112.5 803.96C1111.51 805.54 1110.52 806.23 1108.94 807.32L1112.5 803.96Z"
            fill="#314868"
          />
          <path
            d="M1113.64 805.01C1113.66 804.79 1113.59 804.61 1113.48 804.6C1113.37 804.59 1113.27 804.76 1113.24 804.97C1113.22 805.19 1113.29 805.37 1113.4 805.38C1113.51 805.39 1113.61 805.22 1113.64 805.01Z"
            fill="#314868"
          />
          <path
            d="M1112.2 807.06C1112.23 806.79 1112.07 806.55 1111.86 806.53C1111.65 806.51 1111.44 806.71 1111.42 806.98C1111.39 807.25 1111.55 807.49 1111.76 807.51C1111.98 807.53 1112.18 807.33 1112.2 807.06Z"
            fill="#314868"
          />
          <path
            d="M1105.09 809.01C1109.04 811.68 1115.96 804.96 1122.59 804.76C1129.21 804.46 1144.34 805.65 1146.02 822.85C1148.1 843.02 1128.32 844.2 1124.76 846.48C1121.2 848.75 1121.7 851.32 1123.67 852.12C1125.65 852.91 1128.71 850.04 1129.7 850.54C1130.79 851.03 1128.41 859.64 1117.94 857.36C1107.46 854.99 1107.76 843.91 1113.19 837.98C1118.63 832.05 1125.94 833.93 1129.8 832.84C1133.66 831.75 1138.4 823.74 1135.14 818.41C1131.19 811.89 1124.07 812.48 1116.95 814.26C1109.93 815.84 1105.38 811.79 1105.09 809.02V809.01Z"
            fill="#203957"
          />
          <path
            d="M1105.09 809C1106.97 810.19 1109.34 809.4 1111.22 808.6C1113.2 807.81 1115.17 806.82 1117.15 806.03C1118.63 805.44 1120.21 804.94 1121.8 804.74C1129.81 804.15 1138.8 806.32 1143.15 813.64C1144.83 816.41 1145.72 819.67 1146.02 822.83H1145.92C1145.33 819.67 1144.34 816.6 1142.56 813.93C1139.69 809.48 1134.85 806.91 1129.61 806.12C1127.04 805.63 1124.37 805.53 1121.8 805.63C1121.31 805.63 1120.81 805.73 1120.32 805.83C1117.16 806.52 1114.39 808.01 1111.32 809.09C1109.44 809.68 1106.87 810.47 1105.09 808.99V809Z"
            fill="#646E87"
          />
          <path
            d="M1110.23 843.01C1111.81 837.97 1116.16 834.31 1121.4 833.42C1123.97 832.93 1126.54 833.02 1129.11 832.73C1132.97 832.14 1135.93 826.7 1136.23 823.14C1136.33 822.25 1136.23 821.46 1136.13 820.57C1135.93 819.78 1135.64 818.89 1135.24 818.2H1135.34C1135.44 818.4 1135.54 818.59 1135.74 818.69C1137.52 821.66 1136.93 825.41 1135.44 828.28C1134.35 830.26 1132.87 832.23 1130.69 833.22C1129.4 833.71 1128.02 833.81 1126.64 833.91C1121.4 834.11 1116.75 834.7 1113.1 838.75C1111.91 840.04 1111.02 841.42 1110.23 843V843.01Z"
            fill="#646E87"
          />
          <path
            opacity="0.48"
            d="M1125.35 749.29C1124.26 749.19 1122.88 749.19 1121.3 749.39C1123.28 750.28 1124.56 750.58 1124.56 750.58C1124.36 752.46 1126.14 757.01 1126.04 761.26C1126.24 759.08 1126.44 757.21 1127.03 755.43C1127.62 753.65 1128.51 749.99 1128.32 748.51C1128.02 749.99 1126.64 753.25 1125.95 753.45C1125.55 753.55 1124.47 750.88 1124.66 750.29C1124.86 750.09 1125.06 749.7 1125.35 749.3V749.29Z"
            fill="#1A131E"
          />
          <path
            opacity="0.48"
            d="M1117.06 814.04C1124.18 812.26 1131.3 811.67 1135.25 818.19C1136.54 820.37 1136.54 823.03 1135.84 825.41C1136.43 824.62 1136.83 823.63 1136.93 822.64C1137.13 820.76 1136.44 818.78 1135.45 817.2C1132.78 812.75 1127.44 810.08 1122.3 810.48C1116.17 811.07 1112.41 813.44 1106.78 809.79C1106.68 809.69 1106.48 809.59 1106.38 809.49C1105.98 809.39 1105.59 809.19 1105.19 809H1105.09C1105.39 811.77 1109.93 815.82 1117.05 814.04H1117.06Z"
            fill="#1A131E"
          />
          <path
            opacity="0.48"
            d="M1145.22 831.94C1144.82 832.43 1144.43 833.13 1144.03 833.72C1141.06 837.97 1136.62 841.04 1131.38 841.83C1129.4 842.13 1127.43 842.13 1125.45 842.52C1123.47 843.01 1121.59 844.1 1120.8 845.98C1120.11 847.56 1120.7 849.64 1122.18 850.53C1121.88 849.34 1122.58 847.86 1124.75 846.48C1127.72 844.6 1141.56 843.41 1145.21 831.95L1145.22 831.94Z"
            fill="#1A131E"
          />
          <path
            opacity="0.48"
            d="M1129.6 852.7C1129.4 852.9 1129.2 853.2 1129.01 853.39C1126.74 855.86 1122.88 856.26 1119.82 855.07C1116.76 853.78 1114.38 851.21 1112.8 848.25C1111.61 846.17 1110.82 843.9 1110.92 841.53C1108.15 847.56 1109.54 855.27 1118.04 857.15C1125.26 858.73 1128.62 855.17 1129.61 852.7H1129.6Z"
            fill="#1A131E"
          />
          <path
            opacity="0.48"
            d="M1119.91 877.71C1119.91 877.61 1120.01 877.51 1120.01 877.41C1118.92 878.79 1117.93 880.18 1116.75 881.56C1114.97 883.64 1112.6 885.51 1109.83 885.61C1108.94 885.61 1108.15 885.51 1107.36 885.02C1106.57 884.43 1106.07 883.54 1105.68 882.75C1104.99 881.37 1104.3 880.08 1103.6 878.7C1104.39 883.05 1105.68 885.92 1105.77 887.3C1105.87 888.98 1103.89 892.24 1105.97 892.44C1108.14 892.54 1118.13 882.36 1119.91 877.71Z"
            fill="#1A131E"
          />
          <path
            opacity="0.48"
            d="M1104.2 855.76C1103.9 857.64 1103.61 860.11 1103.41 862.88C1103.9 860.9 1104.4 858.83 1104.99 856.85C1105.39 855.17 1105.78 853.59 1105.78 851.91C1105.78 849.44 1104.89 847.06 1104 844.79C1102.62 841.03 1101.43 837.18 1100.64 833.22C1100.24 831.24 1100.05 829.26 1100.05 827.19C1100.05 826.3 1100.45 824.52 1100.25 823.33C1099.66 828.17 1099.46 832.82 1099.95 835.79C1101.14 842.32 1104.99 850.92 1104.2 855.76Z"
            fill="#1A131E"
          />
          <path
            d="M1131.29 742.86C1130.8 743.35 1130.4 743.95 1129.91 744.54C1129.12 745.73 1128.23 746.81 1127.34 747.9C1126.85 748.49 1126.35 748.99 1125.76 749.58C1125.36 749.78 1124.97 750.07 1124.67 750.47H1124.57C1124.67 749.97 1125.16 749.48 1125.46 749.18C1126.84 747.1 1128.33 744.93 1130.4 743.25C1130.7 743.05 1130.99 742.85 1131.39 742.76L1131.29 742.86Z"
            fill="#646E87"
          />
        </g>
      </g>
    </g>
  );
};

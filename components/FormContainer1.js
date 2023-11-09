import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FormContainer1 = ({ dimensionCode, carDimensions, productCode }) => {
  return (
    <View style={styles.mobilekeyboardDark}>
      <View style={styles.keys}>
        <View style={[styles.return, styles.viewPosition]}>
          <Image
            style={[styles.rectangleIcon, styles.iconLayout]}
            contentFit="cover"
            source={dimensionCode}
          />
          <Text style={[styles.label, styles.labelTypo]}>Go</Text>
        </View>
        <View style={[styles.space, styles.viewPosition]}>
          <Image
            style={[styles.rectangleIcon1, styles.rectangleIconPosition]}
            contentFit="cover"
            source={carDimensions}
          />
          <Text style={[styles.label1, styles.labelTypo]}>space</Text>
        </View>
        <View style={[styles.view, styles.viewPosition]}>
          <Image
            style={[styles.rectangleIcon1, styles.rectangleIconPosition]}
            contentFit="cover"
            source={productCode}
          />
          <Text style={[styles.label2, styles.labelTypo]}>123</Text>
        </View>
        <View style={styles.delete}>
          <View style={styles.keyLight}>
            <Image
              style={[styles.rectangleIcon3, styles.rectangleIconPosition]}
              contentFit="cover"
              source={require("../assets/rectangle3.png")}
            />
            <Text style={[styles.label3, styles.labelTypo]}>{` `}</Text>
          </View>
          <Image
            style={styles.deleteButtonIcon}
            contentFit="cover"
            source={require("../assets/delete-button.png")}
          />
        </View>
        <View style={styles.shift}>
          <View style={styles.keyLight}>
            <View style={styles.rectangleShadowBox} />
            <Text style={styles.symbol}>{` `}</Text>
          </View>
          <Image
            style={[styles.shiftIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/shift.png")}
          />
        </View>
        <View style={[styles.m, styles.mPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol1, styles.symbolPosition]}>M</Text>
        </View>
        <View style={[styles.n, styles.nPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolPosition]}>N</Text>
        </View>
        <View style={[styles.b, styles.bPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol3, styles.symbolPosition]}>B</Text>
        </View>
        <View style={[styles.v, styles.vPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolPosition]}>V</Text>
        </View>
        <View style={[styles.c, styles.cPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolPosition]}>C</Text>
        </View>
        <View style={[styles.x, styles.xPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolPosition]}>X</Text>
        </View>
        <View style={[styles.z, styles.zPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol3, styles.symbolPosition]}>Z</Text>
        </View>
        <View style={[styles.l, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol8, styles.symbolPosition]}>L</Text>
        </View>
        <View style={[styles.k, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol3, styles.symbolPosition]}>K</Text>
        </View>
        <View style={[styles.j, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol8, styles.symbolPosition]}>J</Text>
        </View>
        <View style={[styles.h, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolPosition]}>H</Text>
        </View>
        <View style={[styles.g, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolPosition]}>G</Text>
        </View>
        <View style={[styles.f, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol8, styles.symbolPosition]}>F</Text>
        </View>
        <View style={[styles.d, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolPosition]}>D</Text>
        </View>
        <View style={[styles.s, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol3, styles.symbolPosition]}>S</Text>
        </View>
        <View style={[styles.a, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolPosition]}>A</Text>
        </View>
        <View style={[styles.p, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol3, styles.symbolPosition]}>P</Text>
        </View>
        <View style={[styles.o, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol18, styles.symbolPosition]}>O</Text>
        </View>
        <View style={[styles.i, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol19, styles.symbolPosition]}>I</Text>
        </View>
        <View style={[styles.u, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolPosition]}>U</Text>
        </View>
        <View style={[styles.y, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol3, styles.symbolPosition]}>Y</Text>
        </View>
        <View style={[styles.t, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol3, styles.symbolPosition]}>T</Text>
        </View>
        <View style={[styles.r, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol3, styles.symbolPosition]}>R</Text>
        </View>
        <View style={[styles.e, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol3, styles.symbolPosition]}>E</Text>
        </View>
        <View style={[styles.w, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol25, styles.symbolPosition]}>W</Text>
        </View>
        <View style={[styles.q, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol18, styles.symbolPosition]}>Q</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPosition: {
    top: "79.4%",
    height: "20.6%",
    bottom: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  labelTypo: {
    textAlign: "center",
    color: Color.labelDarkPrimary,
    fontFamily: FontFamily.sFProText,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.bodyBody1_size,
    top: "26.09%",
    height: "50%",
    left: 0,
    position: "absolute",
  },
  rectangleIconPosition: {
    right: 0,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    borderRadius: Border.br_8xs_6,
    left: 0,
    top: 0,
    position: "absolute",
  },
  mPosition: {
    width: "8.67%",
    bottom: "26.47%",
    top: "52.94%",
    height: "20.6%",
    position: "absolute",
  },
  symbolPosition: {
    marginTop: -12.7,
    letterSpacing: -1,
    fontSize: FontSize.size_3xl_5,
    top: "50%",
    textAlign: "center",
    color: Color.labelDarkPrimary,
    fontFamily: FontFamily.sFProText,
    position: "absolute",
  },
  nPosition: {
    left: "66.13%",
    right: "25.2%",
  },
  bPosition: {
    left: "55.82%",
    right: "35.52%",
  },
  vPosition: {
    left: "45.81%",
    right: "45.52%",
  },
  cPosition: {
    left: "35.49%",
    right: "55.84%",
  },
  xPosition: {
    left: "25.48%",
    right: "65.85%",
  },
  zPosition: {
    left: "15.17%",
    right: "76.17%",
  },
  lPosition: {
    bottom: "52.94%",
    top: "26.47%",
    width: "8.67%",
    height: "20.6%",
    position: "absolute",
  },
  pPosition: {
    bottom: "79.4%",
    width: "8.67%",
    top: "0%",
    height: "20.6%",
    position: "absolute",
  },
  rectangleIcon: {
    right: 1,
    borderRadius: Border.br_8xs_6,
    left: 0,
    top: 0,
    overflow: "hidden",
    maxWidth: "100%",
    bottom: 0,
  },
  label: {
    width: 90,
  },
  return: {
    width: "23.86%",
    left: "76.14%",
    right: "0%",
  },
  rectangleIcon1: {
    bottom: 0,
    right: 0,
  },
  label1: {
    width: 187,
  },
  space: {
    width: "49.32%",
    right: "25.48%",
    left: "25.2%",
  },
  label2: {
    width: 89,
  },
  view: {
    width: "23.57%",
    right: "76.43%",
    left: "0%",
  },
  rectangleIcon3: {
    bottom: -1,
  },
  label3: {
    width: 43,
  },
  keyLight: {
    height: "100%",
    width: "100%",
    top: "0%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
  },
  deleteButtonIcon: {
    width: 24,
    height: 17,
  },
  delete: {
    left: "88.63%",
    bottom: "26.47%",
    top: "52.94%",
    width: "11.37%",
    right: "0%",
    height: "20.6%",
    position: "absolute",
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#000",
    backgroundColor: Color.colorDarkslategray_100,
    right: 0,
    borderRadius: Border.br_8xs_6,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  symbol: {
    marginTop: -13.3,
    left: "47.39%",
    letterSpacing: -1,
    fontSize: FontSize.size_3xl_5,
    top: "50%",
    textAlign: "center",
    color: Color.labelDarkPrimary,
    fontFamily: FontFamily.sFProText,
    position: "absolute",
  },
  shiftIcon: {
    height: "52.94%",
    width: "44.9%",
    top: "39.22%",
    right: "27.21%",
    bottom: "7.84%",
    left: "27.89%",
  },
  shift: {
    height: "15.22%",
    right: "88.63%",
    bottom: "31.84%",
    top: "52.94%",
    width: "11.37%",
    left: "0%",
    position: "absolute",
  },
  symbol1: {
    left: "16.37%",
  },
  m: {
    right: "14.91%",
    left: "76.43%",
  },
  symbol2: {
    left: "22.62%",
  },
  n: {
    width: "8.67%",
    bottom: "26.47%",
    top: "52.94%",
    height: "20.6%",
    position: "absolute",
  },
  symbol3: {
    left: "25.6%",
  },
  b: {
    width: "8.67%",
    bottom: "26.47%",
    top: "52.94%",
    height: "20.6%",
    position: "absolute",
  },
  v: {
    width: "8.67%",
    bottom: "26.47%",
    top: "52.94%",
    height: "20.6%",
    position: "absolute",
  },
  c: {
    width: "8.67%",
    bottom: "26.47%",
    top: "52.94%",
    height: "20.6%",
    position: "absolute",
  },
  x: {
    width: "8.67%",
    bottom: "26.47%",
    top: "52.94%",
    height: "20.6%",
    position: "absolute",
  },
  z: {
    width: "8.67%",
    bottom: "26.47%",
    top: "52.94%",
    height: "20.6%",
    position: "absolute",
  },
  symbol8: {
    left: "28.87%",
  },
  l: {
    right: "4.87%",
    left: "86.46%",
  },
  k: {
    right: "15.19%",
    left: "76.14%",
  },
  j: {
    left: "66.13%",
    right: "25.2%",
  },
  h: {
    left: "55.82%",
    right: "35.52%",
  },
  g: {
    left: "45.81%",
    right: "45.52%",
  },
  f: {
    left: "35.49%",
    right: "55.84%",
  },
  d: {
    left: "25.48%",
    right: "65.85%",
  },
  s: {
    left: "15.17%",
    right: "76.17%",
  },
  a: {
    right: "86.17%",
    left: "5.16%",
  },
  p: {
    left: "91.33%",
    right: "0%",
  },
  symbol18: {
    left: "19.64%",
  },
  o: {
    right: "10.03%",
    left: "81.3%",
  },
  symbol19: {
    left: "37.8%",
  },
  i: {
    right: "20.32%",
    left: "71.01%",
  },
  u: {
    right: "30.36%",
    left: "60.97%",
  },
  y: {
    right: "40.65%",
    left: "50.68%",
  },
  t: {
    right: "50.68%",
    left: "40.65%",
  },
  r: {
    right: "60.97%",
    left: "30.36%",
  },
  e: {
    right: "71.01%",
    left: "20.32%",
  },
  symbol25: {
    left: "13.39%",
  },
  w: {
    right: "81.3%",
    left: "10.03%",
  },
  q: {
    right: "91.33%",
    left: "0%",
  },
  keys: {
    height: "94.81%",
    width: "98.4%",
    top: "5.19%",
    right: "0.08%",
    left: "1.52%",
    bottom: "0%",
    position: "absolute",
  },
  mobilekeyboardDark: {
    top: 640,
    left: -1,
    backgroundColor: Color.colorGray_600,
    width: 394,
    height: 212,
    position: "absolute",
  },
});

export default FormContainer1;

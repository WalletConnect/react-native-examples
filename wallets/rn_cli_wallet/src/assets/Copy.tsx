import React from 'react';
import Svg, {Path, type SvgProps} from 'react-native-svg';

const SvgCopy = (props: SvgProps) => (
  <Svg viewBox="0 0 56 56" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.0108 23.0109C23.04 21.4653 23.1477 20.5098 23.545 19.73C24.0243 18.7892 24.7892 18.0243 25.73 17.545C26.7996 17 28.1997 17 31 17C33.8003 17 35.2004 17 36.27 17.545C37.2108 18.0243 37.9757 18.7892 38.455 19.73C39 20.7996 39 22.1997 39 25C39 27.8003 39 29.2004 38.455 30.27C37.9757 31.2108 37.2108 31.9757 36.27 32.455C35.4902 32.8523 34.5348 32.96 32.9892 32.9892L32.989 32.9999C32.9595 34.5392 32.8514 35.492 32.455 36.2699C31.9757 37.2107 31.2108 37.9756 30.27 38.455C29.2004 38.9999 27.8003 38.9999 25 38.9999C22.1997 38.9999 20.7996 38.9999 19.73 38.455C18.7892 37.9756 18.0243 37.2107 17.545 36.2699C17 35.2003 17 33.8002 17 30.9999C17 28.1997 17 26.7995 17.545 25.73C18.0243 24.7892 18.7892 24.0243 19.73 23.5449C20.508 23.1485 21.4608 23.0405 23 23.011L23.0108 23.0109ZM31 31.5C29.5751 31.5 28.5967 31.4988 27.8382 31.4369C27.0972 31.3763 26.6991 31.2653 26.411 31.1185C25.7525 30.783 25.217 30.2475 24.8815 29.589C24.7347 29.3009 24.6237 28.9028 24.5631 28.1618C24.5012 27.4033 24.5 26.4249 24.5 25C24.5 23.5751 24.5012 22.5967 24.5631 21.8382C24.6237 21.0972 24.7347 20.6991 24.8815 20.411C25.217 19.7525 25.7525 19.217 26.411 18.8815C26.6991 18.7347 27.0972 18.6237 27.8382 18.5631C28.5967 18.5012 29.5751 18.5 31 18.5C32.4249 18.5 33.4033 18.5012 34.1618 18.5631C34.9028 18.6237 35.3009 18.7347 35.589 18.8815C36.2475 19.217 36.783 19.7525 37.1185 20.411C37.2653 20.6991 37.3763 21.0972 37.4369 21.8382C37.4988 22.5967 37.5 23.5751 37.5 25C37.5 26.4249 37.4988 27.4033 37.4369 28.1618C37.3763 28.9028 37.2653 29.3009 37.1185 29.589C36.783 30.2475 36.2475 30.783 35.589 31.1185C35.3009 31.2653 34.9028 31.3763 34.1618 31.4369C33.4033 31.4988 32.4249 31.5 31 31.5ZM23 24.5112C22.556 24.52 22.1753 24.5355 21.8382 24.5631C21.0972 24.6236 20.6991 24.7346 20.411 24.8814C19.7525 25.217 19.217 25.7524 18.8815 26.411C18.7347 26.699 18.6237 27.0971 18.5631 27.8381C18.5012 28.5966 18.5 29.5751 18.5 30.9999C18.5 32.4248 18.5012 33.4033 18.5631 34.1618C18.6237 34.9028 18.7347 35.3008 18.8815 35.5889C19.217 36.2475 19.7525 36.7829 20.411 37.1185C20.6991 37.2652 21.0972 37.3763 21.8382 37.4368C22.5967 37.4988 23.5751 37.4999 25 37.4999C26.4249 37.4999 27.4033 37.4988 28.1618 37.4368C28.9028 37.3763 29.3009 37.2652 29.589 37.1185C30.2475 36.7829 30.783 36.2475 31.1185 35.5889C31.2653 35.3008 31.3763 34.9028 31.4369 34.1618C31.4644 33.8246 31.4799 33.4439 31.4887 32.9999C31.3307 33.0001 31.1679 33 31 33C28.1997 33 26.7996 33 25.73 32.455C24.7892 31.9757 24.0243 31.2108 23.545 30.27C23 29.2004 23 27.8003 23 25C23 24.8321 22.9999 24.6693 23 24.5112Z"
      fill={props.fill || 'white'}
    />
  </Svg>
);
export default SvgCopy;

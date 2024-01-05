import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <path
      fill={props.color}
      stroke={props.color}
      d="m7.407 21.67-.004-.003a1.24 1.24 0 0 1-.653-1.097v-1.871l-.449-.046c-1.397-.144-2.527-.724-3.308-1.612-.782-.889-1.243-2.117-1.243-3.601v-6c0-1.606.537-2.91 1.439-3.812C4.09 2.727 5.395 2.19 7 2.19h10c1.605 0 2.91.537 3.811 1.438.902.902 1.439 2.206 1.439 3.812v6c0 1.605-.537 2.91-1.439 3.811-.901.902-2.206 1.439-3.811 1.439h-3.921l-.126.084-4.257 2.838h-.002a1.264 1.264 0 0 1-1.287.057Zm1.001-.478.009-.006 4.45-2.96c.045-.03.1-.046.143-.046h4c1.4 0 2.597-.455 3.446-1.304.849-.849 1.304-2.046 1.304-3.446v-6c0-1.4-.455-2.597-1.304-3.446-.849-.849-2.046-1.304-3.446-1.304H7c-1.4 0-2.597.455-3.446 1.304C2.705 4.833 2.25 6.03 2.25 7.43v6c0 1.4.455 2.597 1.304 3.446C4.403 17.725 5.6 18.18 7 18.18c.134 0 .25.116.25.25v2.13c0 .393.266.585.373.649a.742.742 0 0 0 .785-.017Z"
    />
    <path
      fill={props.color}
      d="M12 12.11c-.41 0-.75-.34-.75-.75v-.21c0-1.16.85-1.73 1.17-1.95.37-.25.49-.42.49-.68 0-.5-.41-.91-.91-.91s-.91.41-.91.91c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-1.33 1.08-2.41 2.41-2.41s2.41 1.08 2.41 2.41c0 1.14-.84 1.71-1.15 1.92-.39.26-.51.43-.51.71v.21c0 .42-.34.75-.75.75ZM12 14.6a.749.749 0 1 1-.002-1.498A.749.749 0 0 1 12 14.6Z"
    />
  </svg>
);
export default SvgComponent;
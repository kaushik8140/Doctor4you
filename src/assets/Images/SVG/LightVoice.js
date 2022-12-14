import React, { memo } from "react";
import Svg, { Rect, Path } from "react-native-svg"

const LightVoice = ({ color = "#ED7E03", scale = 1, ...props }) => {
    return (
        <Svg
            width={60}
            height={60}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect opacity={0.15} width={60} height={60} rx={20} fill="#fff" />
            <Path
                d="M29.473 17.608c-.123.058-1.383 1.27-3.223 3.11l-3.018 3.012h-1.67c-1.78 0-2.22.047-2.7.293-.317.165-.833.65-1.014.961-.334.569-.328.516-.328 5.016s-.006 4.447.328 5.016c.181.31.697.797 1.013.96.48.247.92.294 2.701.294h1.665l3.052 3.04c3.323 3.311 3.194 3.206 3.838 3.159.404-.03.686-.194.926-.545l.158-.234V18.299l-.158-.229c-.258-.369-.527-.515-.979-.533-.257-.012-.457.012-.591.07ZM37.389 20.953a1.21 1.21 0 0 0-.65 1.377c.052.223.18.41.62.914 1.354 1.541 2.157 3.17 2.49 5.033.176.979.176 2.467 0 3.446-.333 1.863-1.136 3.492-2.49 5.033-.44.504-.568.691-.62.914a1.21 1.21 0 0 0 .65 1.377c.328.164.591.187.937.094.627-.176 2.104-2.034 2.9-3.657 1.202-2.449 1.56-5.267 1.014-8.004-.27-1.353-.967-3.076-1.693-4.189-.797-1.213-1.793-2.314-2.197-2.426-.37-.1-.627-.076-.961.088Z"
                fill="#fff"
            />
            <Path
                d="M34.113 24.37a1.265 1.265 0 0 0-.797.655c-.269.551-.187.967.293 1.524.938 1.066 1.372 2.156 1.372 3.451s-.434 2.385-1.372 3.451c-.48.557-.562.973-.293 1.524.264.521.82.785 1.39.644.732-.176 1.915-1.781 2.407-3.275a7.46 7.46 0 0 0-.884-6.492c-.393-.592-1.002-1.254-1.266-1.383a1.434 1.434 0 0 0-.85-.1Z"
                fill="#fff"
            />
        </Svg>
    );
}

export default memo(LightVoice);
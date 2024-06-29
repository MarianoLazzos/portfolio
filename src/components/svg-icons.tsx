'use client'

import React from 'react'
import Image, { ImageProps } from 'next/image'

interface SvgIconBaseProps extends Omit<ImageProps, 'src' | 'className' | 'alt'> {
  className?: string;
  alt?: string
}

interface SvgIconWithNameProps extends SvgIconBaseProps {
  name: string;
  src?: never;
}

interface SvgIconWithSrcProps extends SvgIconBaseProps {
  src: string;
  name?: never;
}

export type SvgIconProps = SvgIconWithNameProps | SvgIconWithSrcProps;

const SvgIcon: React.FC<SvgIconProps> = ({ alt, ...props }) => {
  const src = props?.src ?? `/assets/svg-icons/${props.name}.svg`
  alt = alt ?? props?.name ?? ''

  return (
    <Image
      alt={alt}
      src={src}
      width={20}
      height={20}
      {...props}
    />
  )
}

export default SvgIcon

import { ReactElement, cloneElement } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router';

interface ActiveLinkProps extends LinkProps{
  children: ReactElement,
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({ 
  children, 
  shouldMatchExactHref = false, 
  ...rest 
}: ActiveLinkProps) {
  const { asPath } = useRouter()

  let isActive = false;

  // asPath === rest.as)
  if (shouldMatchExactHref && (asPath === rest.href)) {
    isActive = true
  } 

  // asPath.startsWith(String(rest.as))
  if (!shouldMatchExactHref && (asPath.startsWith(String(rest.href)))) {
        isActive = true
      } 

  return (
    <Link {...rest}>
      {cloneElement(children, { 
        color: isActive ? 'pink.400' : 'gray.50'
      })}
    </Link>
  );
}
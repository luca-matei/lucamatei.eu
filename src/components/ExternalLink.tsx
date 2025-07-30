import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLink} from "@fortawesome/free-solid-svg-icons";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 hover:underline">
      <span>{children}</span>
      <FontAwesomeIcon icon={faExternalLink} className={"inline ml-1 w-2.5 h-2.5"} />
    </a>
  );
}
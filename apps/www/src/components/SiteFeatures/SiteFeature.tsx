type Props = {
  children: React.ReactNode;
};

export const SiteFeature = ({ children }: Props) => {
  return (
    <article className='space-y-1 rounded-2xl border border-greyLine px-4 pb-5 pt-4 shadow'>
      {children}
    </article>
  );
};

export const SiteFeatureTitle = ({ children }: Props) => {
  return <h3 className='text-lg font-medium'>{children}</h3>;
};

export const SiteFeatureDescription = ({ children }: Props) => {
  return <p className='text-md text-greyText'>{children}</p>;
};

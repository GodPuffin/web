export default {
  readMore: 'Read More →',
  darkMode: true,
  primaryHue: 296,
  project: {
    link: 'https://gitlab.com/inkscape/inkscape',
    icon: <svg width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="m231.9 169.8l-94.8 65.6a15.7 15.7 0 0 1-18.2 0l-94.8-65.6a16.1 16.1 0 0 1-6.4-17.3L45 50a12 12 0 0 1 22.9-1.1L88.5 104h79l20.6-55.1A12 12 0 0 1 211 50l27.3 102.5a16.1 16.1 0 0 1-6.4 17.3Z"></path></svg>,
  },
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      Made By Marcus Lee.
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
}
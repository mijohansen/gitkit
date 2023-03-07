exports.up = (pgm) => {
  pgm.createTable('session', {
    sid: { type: 'varchar', notNull: true },
    sess: { type: 'json', notNull: true },
    expire: {
      type: 'timestamp(6)',
      notNull: true,
    },
  });
  pgm.addConstraint(
    'session',
    'session_pkey',
    'PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE'
  );
  pgm.createIndex('session', 'expire', { name: 'IDX_session_expire' });
};

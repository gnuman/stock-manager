FROM postgres:9.6
RUN userdel postgres
RUN groupadd -r postgres --gid=1000 && useradd -r -g postgres --uid=1000 postgres
RUN chown -R postgres:postgres /var/lib/postgresql/data

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["postgres"]

import pymysql.cursors
from dbconnection import db_connection

db = db_connection

class DataRoute():
  
  def test():
    cur = db.cursor(pymysql.cursors.DictCursor)
    cur.execute(f"SELECT * FROM hipasstest")
    res = cur.fetchall()
    print(res)
    return res
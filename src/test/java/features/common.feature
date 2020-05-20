Feature: Common Feature

  Scenario: Generate unique messageUid
    * def now = function(){ return java.lang.System.currentTimeMillis() }

  Scenario: Connect to database
    * def DbUtils = Java.type('util.DbUtils')
    * def dbConnect = new DbUtils()

  Scenario: Sleep
    * def sleepForSeconds =  function(pause){ java.lang.Thread.sleep(pause*1000) }


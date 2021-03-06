[general]
; supported adapters : PDO_MYSQL, PDO_PGSQL, PDO_SQLITE  
db.adapter = PDO_MYSQL
db.config.host = localhost
db.config.username = root
db.config.password =
db.config.dbname = bacula
; for Sqlite db.config.dbname = "/full patch/bacula.db"

; see http://www.php.net/timezones
def.timezone = "Europe/Minsk"

; if locale undefined, webacula use autodetect
; avaliable locales : en, de, fr, pt_BR, ru, it, es
locale = "es"

; see INSTALL file for details
bacula.sudo = "/usr/bin/sudo"
bacula.bconsole = "/opt/bacula/sbin/bconsole"
bacula.bconsolecmd = "-n -c /opt/bacula/etc/bconsole.conf"

; Directory "tmpdir" which will be saved the file, which contains a list of files to restore.
; This directory and files in it should be available to read the Director service.
tmpdir = "/tmp"

; time to live data (session and temporary data tables) for restore files (sec)
; default = 1h, minimum = 600sec.
; ttl_restore_session = 3600

; for debug only (default = 0). Debug log written to '/tmp/webacula_debug.log'
; debug_level = <0...9>

; the text, which will be placed in the header of the page
; head_title = "webacula :: domain.tld"

; Main menu floating (default = 0)
; A floating menu stays visible even if you scroll down a web page.
; They're animated, so they move up and down as you scroll the browser window up or down.
; mainmenu_floating = 1

; As many days to show those Jobs that are completed with errors (default = 7)
; Jobs with errors (last NN day(s)
; days_to_show_jobs_with_errors = 7


[timeline]
gdfontpath = "/usr/share/fonts/dejavu"
fontname   = "DejaVuLGCSansMono"
fontsize   = 10


[webacula]
email.to_admin = root@localhost
email.from = webacula@localhost


[feed]
feed_title = "My Bacula backup server #1"
feed_desc  = "Description feed here"

[layout]
; available values : "default"
path = "default"


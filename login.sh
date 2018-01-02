#!/usr/bin/expect
if {$argc!=2} {
	send_user "Usage {type( 1 or 2)} {token}"
	exit
}
set type [lindex $argv 0]
set token [lindex $argv 1]
set timeout 10
if {$type==1} {
spawn ssh -l 邮箱前缀 10.210.66.44
expect "password:"
send "内网密文\r"
expect "PASSCODE:"
send "静态密码$token\r"
}
if {$type==2} {
spawn ssh -l 邮箱前缀 202.106.184.253 
expect "password:"
send "外网密文\r"
expect "PASSCODE:"
send "静态密码$token\r"
}
interact

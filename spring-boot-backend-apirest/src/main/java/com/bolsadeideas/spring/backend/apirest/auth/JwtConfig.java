package com.bolsadeideas.spring.backend.apirest.auth;

public class JwtConfig {
	public static final String LLAVE_SECRETA = "alguna.clave.secreta.12345678";
	
	public static final String RSA_PRIVADA = "-----BEGIN RSA PRIVATE KEY-----\r\n" + 
			"MIIEowIBAAKCAQEA4S2r385fYS1ZKXWZK7AK+11R3CN7LOuHVSfxazKQJmePAWUI\r\n" + 
			"lO7wNZM6FalaJY1e3VBNUUzeyN7AKusirkYPhTwkox6z0HdAPP7pVHcluWHEbijZ\r\n" + 
			"5+ER1h6Xw0hN4ghzMOoDosWo1VO+d0I3C3RvmAQ6sjHc6oB2YNHHMOWpSlQQj97Y\r\n" + 
			"HTOyNmU6389xrF8lQm6x9unSROAvTwWQ2+vb+AtQk8x/oYs9DcTZQOnHJCP8Qc+j\r\n" + 
			"AvCn5HcCxj9oJzaJex/ja8KxpLmOZRdfXv/RrbGVzKtJmDHHbktJBlgQ8/Hrwl1X\r\n" + 
			"9K1syWVDKqm5rmmvQXcGo+3EnVtZ8YSYX7LnAwIDAQABAoIBAHyXrrAJGlFErD76\r\n" + 
			"aKP5pjnrKq4pm7ABKkJ99WCg+42kY0YcRyFRC+w46DywFccNb9343q8LX4G5bo7Q\r\n" + 
			"x8Gx1kicPJFdHZVNRmf5i9VGj8MBS5TAWcGpkRruln5g9WcJ0eLQuO5Je999lLec\r\n" + 
			"FaTq6gws2uVaHahLKDTuHc76ZC9RRoZHywL8sz3/5J4pto/khxvV1QMkt7BIUpmf\r\n" + 
			"17Z74aJKT9pD60vaaZa3nX9/qrfVgH5t1MVlWj07l/kkOGRmRLxH7qKp7FaSKRqw\r\n" + 
			"PKh+qvnpT1M7qjG76IkrojO1T3a9RuIkKNqcF7DQBbN4chy5ncceioeWlsEA8RQc\r\n" + 
			"k7AZpwECgYEA9pbO42cuYpQeBOcc+iUc2W4m33hsWJowBpEkMDLOuYokfRYCZmrf\r\n" + 
			"hsYxqpqSynJfyJY9gKMDneaWFptre1ujRf/QbiydiBokwZdW2fayG9L0VBfryHDo\r\n" + 
			"A4uI89jqdfSgDs8/qQvG8DZKRPZQyGHRe1irKMtW8K2ZbUCtJUKlKUMCgYEA6cWt\r\n" + 
			"6lPke1CIVu0IOTGWpya+5lpx7wyFlS34v/4vup8t0VrxuIZrZt0eqrlHpt2esr7w\r\n" + 
			"wSOxAXH/jaHeH13j/Z1cn/8GVRitDz5xsl9tWxcnigzjjjfdGZG2Uk0+JEQ0Etyk\r\n" + 
			"/0W3CwicEcqwwSTAV0Jh0VlzGmx9suDWCgR9j0ECgYA3tX5sFaV/E+NsTCJZyQSp\r\n" + 
			"gp85oWUo5zyuXyAD25akiDcSI2TLap2xPxl9Z4p+PjSxhm/CnhF1HOEPnnE730oV\r\n" + 
			"yGN4YI/+bZmcOuqeN4OpkZEtZnIYSJnCI0X/gSQHHgsDDYNeV5DMOBezWMqLWr4O\r\n" + 
			"1ctlXfr4SN/+tLvpTRMvLQKBgBiPGO9GMvm1gy1Gp5eCmyYiTunaVJ/de+cpNjnN\r\n" + 
			"VWxQrrqQyFYvYPckgcVDw8BHBhYXMynHOyBAvq09dR1serg5IPL6Ess71WqFj+JC\r\n" + 
			"XjW0oAXDxuA5BDRcd3/792xN8f6NSZQ72bgCBotj9N/FoaNJKQeaUxpSjX4OWs4g\r\n" + 
			"nKRBAoGBALgG5k4e3sRft5txgUTZXGjaXUCVca2/KHFMauA6lOa3qEueBz6YFvfy\r\n" + 
			"8zxtQzDDp6ejhw1jDiwj/36LnfsCKRY+H+rwkY9ElfNHhk7qrzMtNDlimNmGFCJH\r\n" + 
			"f8WsPpDkYLKaKvV/A1A2eU+5aSyH26DUjPhF+/b3z4iQJlLSZBoo\r\n" + 
			"-----END RSA PRIVATE KEY-----";
	
	public static final String RSA_PUBLICA = "-----BEGIN PUBLIC KEY-----\r\n" + 
			"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4S2r385fYS1ZKXWZK7AK\r\n" + 
			"+11R3CN7LOuHVSfxazKQJmePAWUIlO7wNZM6FalaJY1e3VBNUUzeyN7AKusirkYP\r\n" + 
			"hTwkox6z0HdAPP7pVHcluWHEbijZ5+ER1h6Xw0hN4ghzMOoDosWo1VO+d0I3C3Rv\r\n" + 
			"mAQ6sjHc6oB2YNHHMOWpSlQQj97YHTOyNmU6389xrF8lQm6x9unSROAvTwWQ2+vb\r\n" + 
			"+AtQk8x/oYs9DcTZQOnHJCP8Qc+jAvCn5HcCxj9oJzaJex/ja8KxpLmOZRdfXv/R\r\n" + 
			"rbGVzKtJmDHHbktJBlgQ8/Hrwl1X9K1syWVDKqm5rmmvQXcGo+3EnVtZ8YSYX7Ln\r\n" + 
			"AwIDAQAB\r\n" + 
			"-----END PUBLIC KEY-----";

}

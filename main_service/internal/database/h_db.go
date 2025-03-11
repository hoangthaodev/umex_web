package database

import (
	"context"
	"database/sql"
	"encoding/json"
)

func (q *Queries) QueryByString(ctx context.Context, queryString string, args ...interface{}) ([]byte, error) {
	rows, err := q.db.QueryContext(ctx, queryString, args...)
	if err != nil {
		return nil, err
	}

	columns, err := rows.Columns()
	if err != nil {
		return nil, err
	}

	values := make([]interface{}, len(columns))
	for i := range values {
		values[i] = new(sql.RawBytes)
	}

	var datas []map[string]interface{}

	// Lặp qua các hàng dữ liệu
	for rows.Next() {
		data := make(map[string]interface{})

		// Đọc dữ liệu vào slice values
		err = rows.Scan(values...)
		if err != nil {
			return nil, err
		}

		// In giá trị của từng cột
		for i, col := range values {
			data[columns[i]] = string(*col.(*sql.RawBytes))
			// fmt.Printf("%s: %s\n", columns[i], string(*col.(*sql.RawBytes)))
		}

		datas = append(datas, data)
	}
	jsonData, err := json.Marshal(datas)
	if err != nil {
		return nil, err
	}
	return jsonData, nil
}
